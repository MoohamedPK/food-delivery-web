import express from "express";
import { addFood, getFood, deleteFood } from "../controllers/foodController.js";
import multer from "multer"


const foodRouter = express.Router();

// image storage engine (to store a a file image video in a certain file )
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cl) => {
        cl(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getFood);
foodRouter.post("/remove", deleteFood);

export default foodRouter;