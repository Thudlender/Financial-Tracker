const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

//use Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) =>{
    res.send("<h1>Financial Tracker API</h1>")
});

//Use router
app.use("/api/vi/financial",financialRouter);

app.listen(PORT, ()=>{
    console.log("Listening to http://localhost:"+PORT)
})