const generateHeadline =    require("./utils/generateHeadLine");
const generateReviews = require("./utils/generateReviews");
const generateRating =  require("./utils/generateRating");
const  seoHeadlines  = require("./utils/seoHeadLines");
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


app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    if (!name || !location) {
      return res.status(400).json({ 
        error: 'business name and location are required' 
      });
    }

    const newHeadline = generateHeadline(name, location);
    
    res.json({ headline: newHeadline });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error bro' });
  }
});


app.listen(3000,()=> {
    console.log(`Server is listening on port ${3000} bro!`)
})