
const express = require("express");

const app = express();

app.use(express.json());




app.get("/" ,(req, res) => {
        console.log("trigger")
        res.json({
            message: "Hii  ra Mouli"
        })
})

app.listen(3000,()=> {
    console.log(`Server is listening on port ${3000} bro!`)
})