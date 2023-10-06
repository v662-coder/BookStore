const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require('cors');
//G0yCYWpm9T2lput8
const app =express();
app.use(express.json());
app.use(cors());
//middleware
app.use("/books",router)//localhost:5000/bookd
mongoose.connect("mongodb+srv://admin:NDXYg2vdh94XHoeX@cluster0.tevl8xj.mongodb.net/bookStore").then(()=>console.log("connected to database")).then(()=>{app.listen(5000);}).catch((err)=>console.log(err));