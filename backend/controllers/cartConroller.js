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
        res.json({ success: true, message: " Item added to cart"});

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


const deleteCartitem = async (req, res) =>{

    try {
        
        const userData = await userModel.findById(req.body.userId);
        console.log(userData)
        const userCart = await userData.cartData;

        if (userCart[req.body.itemId]) {
            delete userCart[req.body.itemId]
            await userModel.findByIdAndUpdate(req.body.userId, {cartData: userCart});
            return res.status(200).json({success:true, message:'Item deleted'})
        } else {
            return res
            .status(404)
            .json({ success: false, message: "Item not found" });
            
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false, message: error.message})
    }
}

export {addCart, removeCart, getCart, deleteCartitem};