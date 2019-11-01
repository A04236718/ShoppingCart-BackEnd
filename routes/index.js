var express = require('express');
var router = express.Router();

// GET HomePage 
router.get( (req,res,next) => {
    let message = 'Welcome to The HomePage!';
    res.status(200).json({message});
});

module.exports = router;