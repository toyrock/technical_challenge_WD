const express = require("express");
const Phones = require("../data/phones.json");
const router = express.Router();



router.get("/", async (req, res) => { 
    res.json(Phones);
  });
  
   router.get("/:id", async (req, res) => {
    const det = await Phones.findById(req.params.id)
    res.json(det);
})

  
  module.exports = router;