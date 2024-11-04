const express = require("express");
const router = express.Router();
const responses = require("controllers/control.js");
router.get("/getall", (req,res)=>{
    res.send("GET executed");
})

module.exports = router;