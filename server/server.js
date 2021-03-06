require('dotenv').config();

const express = require("express");
const db = require("./db");

const morgan = require('morgan');
const app = express();

app.use(express.json());


// Get all Restaurants
app.get("/api/v1/restaurants", async (req,res)=>{

    const results = await db.query('SELECT * FROM restaurants');
    console.log(results);
    res.status(200).json({
        status: "success",
        data:{
            restaurants: ["Mr Dees", "Sweet Sensations"]
        },
    });
});
// Create a Restaurant
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data:{
            restaurant: "Mr Dees"
        }
    });
})

//Update Retaurants
app.put("/api/v1/restaurants/:id", (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data:{
            restaurant: "Mr Dees"
        }
    });
})

//Get individual Restaurants
app.get("/api/v1/restaurants/:id",(req,res)=>{
    console.log(req.params);

    res.status(200).json({
        status: "success",
        data:{
            restaurant: "Mr Dees"
        }
    });
})
//Delete Restaurant
app.delete("/api/v1/restaurants/:id",(req,res)=>{
    
    res.status(204).json({
        status: "success",
    });
})
const port  = process.env.PORT|| 3001;
app.listen(port,()=>{
    console.log(`server is up and listening on port ${port}`)
});