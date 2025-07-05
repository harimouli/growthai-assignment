import { generateHeadline } from "./utils/generateHeadLine";
import {generateReviews} from "./utilsgenerateReviews"
import {generateRating} from "./utils/generateRating"
import { seoHeadlines } from "./utils/seoHeadLines";
const express = require("express");
const app = express();

app.use(express.json());



app.post("/business-data" ,(req, res) => {
        const {name, location} = req.body;

         if (!name || !location) {
            res.status(500).json({ 
                    error: 'Business name and location are required' 
            });
           return;
        }

        try {
            const rating = generateRating();

            const reviews = generateReviews();
            const headline = generateHeadline();
             const businessData = {
                rating, 
                reviews,
                headline,
            };

            res.status(200).json({
                businessData   
            })
        }catch(error) {
                res.status(500).json("Internal server error!")   
        }


})

app.listen(3000,()=> {
    console.log(`Server is listening on port ${3000} bro!`)
})