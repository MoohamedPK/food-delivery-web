import {addCart, removeCart, getCart, deleteCartitem} from "../controllers/cartConroller.js"
import express from "express";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();


cartRouter.post("/add",authMiddleware, addCart);
cartRouter.post("/remove",authMiddleware, removeCart);
cartRouter.post("/get",authMiddleware, getCart);
cartRouter.delete("/delete", authMiddleware, deleteCartitem)

export default cartRouter