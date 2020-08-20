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

//NEW
router.get('/new', (req,res)=>{
    res.render('cards/New')
})

//DELETE

//UPDATE

//CREATE

//EDIT

//SHOW



//EXPORT ROUTER
module.exports = router