import express from "express";
import cors from "cors";
import { connectDB } from "./cofig/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js";
import "dotenv/config"



//configs 
const app = express();
const PORT = process.env.PORT;

//middleware 
app.use(express.json());
app.use(cors());


//ENDPOINTS
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
// this gives access to a particular file ex: when you hit the images path, you can have access to the uploads file content 
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get("/", (req, res) => {
    res.send("API working");
})


app.listen(PORT, () => {
  // connect DB
  connectDB();
  console.log(`server run in http://localhost:${PORT}`);
})