const express = require('express');
const router = express.Router();
const Card = require('../models/cards.js')

//ADD INDUCES ROUTES

//INDEX
router.get('/', (req,res)=>{
    Card.find({},(error, allCards)=>{
        res.render('cards/Index', {
            cards: allCards
        });
    });
});

//EXPORT ROUTER
module.exports = router