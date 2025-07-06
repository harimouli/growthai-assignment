
const express = require("express");
const cors = require("cors");
const generateHeadline = require('./utils/generateHeadLine'); 
const generateReviews = require("./utils/generateReviews");
const generateRating =  require("./utils/generateRating");


const app = express();

app.use(express.json());


const allowedOrigins = [
  "http://localhost:5173",
  "https://growthai-assignment.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
}));


app.post("/business-data" ,(req, res) => {
        const {name, location} = req.body;
   
         if (!name || !location) {
            res.status(400).json({ 
                    error: 'Business name and location are required' 
            });
           return;
        }

        try {
            const rating = generateRating();

            const reviews = generateReviews();
            const headline = generateHeadline(name, location);
             const businessData = {
                rating, 
                reviews,
                headline,
            };

            res.status(200).json({
                businessData   
            })
        }catch(error) {
            console.log(error);
                res.status(500).json({
                    error: 
                      "Internal server error!"
                })   
        }


})


app.get('/regenerate-headline', (req, res) => {
  
    const name = req.query.name;
    const location = req.query.location;
    console.log(name, location);
    try {
    if (!name || !location) {
      res.status(400).json({ 
        error: 'business name and location are required' 
      });

      return;
    }

    const newHeadline = generateHeadline(name, location);
    
    res.json({ headline: newHeadline });
  } catch (error) {
    console.log(error);
    return  res.status(500).json({ error: 'Internal server error bro' });
  }
});


app.listen(3000,()=> {
    console.log(`Server is listening on port ${3000} bro!`)
})