import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import Stripe from "stripe"


const placeOrder = async (req, res) => {

    const front_host = "http://localhost:5173";

    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })

        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
        
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity : item.quantity
        }))

        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Delivery charges"
                },
                unit_amount: 2 * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
          line_items,
          mode: "payment",
          success_url: `${front_host}/verify?success=true&orderId=${newOrder._id}`,
          cancel_url: `${front_host}/verify?success=false&orderId=${newOrder._id}`,
        });
        res.status(200).json({success: true, session_url: session.url})

    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, message: error.message})
    }
}


const verifyOrder = async (req, res) => {

    const {orderId, success} = req.body;

    try {

        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, {payment: true})
            res.status(200).json({success: true, message: "Order paid"})
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success: false, message: "Order Not Paid"});
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message: error.message})
    }
}

// USE ORDER FOR FRONTEND

const useOrders = async (req,res) => {

    try {
        const orders = await orderModel.find({userId: req.body.userId})

        res.status(200).json({success:true, data: orders});
    } catch (error) {
        console.log(error)
        res.status(401).json({success:false, message: error.message})
    }
}


// LIST ORDERS ON ADMIN PAGE 
const adminOrderList = async (req, res) => {

    try {
        const orders = await orderModel.find({});
        res.status(200).json({success: true, data: orders});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
}

// CHANGE ORDER STATUS 
const changeOrderStatus = async(req, res) => {
    try {
        
        await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status});
        res.status(200).json({success: true, message: "Status updated"})

    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message})
    }
}
export { placeOrder, verifyOrder, useOrders, adminOrderList, changeOrderStatus };