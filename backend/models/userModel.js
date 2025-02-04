import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true}, // unique property make sure that no email will be repeated
    password: {type: String, required: true},
    cartData: {type: Object, default: {}},

}, {minimize: false}); // the minimize prop will make sure that we can store an ampty object


// if a model has been stored in mongoose use it || or if it's not then save it 
const userModel = mongoose.models.user  || mongoose.model("user", userSchema);
export default userModel;