
const express = require("express");

const app = express();

app.use(express.json());


const seoHeadlines = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "Discover {name}: {location}'s Premier Destination",
  "The Ultimate Guide to {name} in {location}",
  "{name} Transforms {location}'s Business Landscape",
  "Experience Excellence at {name} in {location}",
  "Why {name} is Taking {location} by Storm",
  "{name}: Your Next Favorite Spot in {location}",
  "The Rise of {name} in {location}'s Market",
  "Exceptional Service Awaits at {name} in {location}",
  "{name} Sets New Standards in {location}",
  "Behind the Success of {name} in {location}",
  "Why Everyone's Talking About {name} in {location}"
];


const generateReviews = () => {
  return Math.floor(Math.random() * 500) + 50; // 50-550 range
};

const generateRating = () => {
  return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;  // 0 <= 1.5 by adding we get 1.5<= 3.5

};


app.post("/business-data" ,(req, res) => {
        const {name, location} = req.body;

         if (!name || !location) {
            res.status(400).json({ 
                    error: 'Business name and location are required' 
            });
           return;
        }

        try {
            const rating = generateRating() || "4.0";

            const reviews = generateReviews() || "60";
            const headline = generateHeadline() || `${name} is a good company`;
             const businessData = {
                rating, 
                reviews,
                headline,
            };

            res.status(200).json({
                businessData   
            })
        }catch(error) {
                res.status(400).json("Internal server error!")   
        }


})

app.listen(3000,()=> {
    console.log(`Server is listening on port ${3000} bro!`)
})