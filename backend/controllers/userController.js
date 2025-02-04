import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator"


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
} 

const userLogin = async (req, res) => {

    const {email, password} = req.body;

    try {
        
        // first we will check the user if exists 
        const user = await userModel.findOne({email});

        //then if it's not 
        if (!user) {
            return res.status(404).json({success: false, message: "User doesn't exist"});
        }

        // after we will check the password 
        const isMatch = await bcrypt.compare(password, user.password);

        // if the password isn't match
        if(!isMatch) {
            return res.status(401).json({success: false, message: "Incorrect credential"});
        }

        // if everything is correct then we will create a token for the user 
        const token = createToken(user._id);
        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "error"});
    }
}


const userRegister = async (req, res) => {

    const {name, email, password} = req.body;

    try {
        // check if the email is already exists in DB
        const exists = await userModel.findOne({email});

        if (exists) {
            return res.json({success: false, message: "User already exists"});
        }
        // validate the email format and strong password 
        if (!validator.isEmail(email)) {
            res.json({success:false, message: "please enter a valide email"});
        }
        if (password.length < 8) {
            return res.json({success:false, message: "please enter a strong password"});
        }

        // hashing the password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        })

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "error" });
    }
}


export { userLogin, userRegister };