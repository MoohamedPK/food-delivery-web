import userModel from "../models/userModel.js";


const addCart = async (req, res) => {

    try {
        
        const userData = await userModel.findById(req.body.userId)
        const cartData = await userData.cartData;

        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        } 

        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({ success: true, message: "Added to cart", items:cartData});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}


const removeCart = async (req, res) => {

    try {
        
        const userData = await userModel.findById(req.body.userId);
        const cartData = await userData.cartData;

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1
        } 
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({
          success: true,
          message: "Deleted Successfully",
          items: cartData
        });

    } catch (error) {
        console.log(error);
        return res.json({success: false, message: "Error"})
    }
}


const getCart = async(req, res) => {

    try {
        
        const userData = await userModel.findById(req.body.userId);
        const cartData = await userData.cartData;

        res.json({success: true, items: cartData});

    } catch (error) {
        console.log(error);
        res.json({success: true, message: "error"})
    }
}

export {addCart, removeCart, getCart};