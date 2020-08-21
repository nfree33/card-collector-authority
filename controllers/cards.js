const express = require('express');
const router = express.Router();
const Card = require('../models/cards.js')

//ADD INDUCES ROUTES

//INDEX
router.get('/', (req,res)=>{
    Card.find({},(error, allCards)=>{
        res.render('cards/Index', {
            card: allCards
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
router.post("/", (req, res) => {
    // console.card(req.body)
    if (req.body.isRookie === "on") {
        req.body.isRookie = true;
    } else if (req.body.isRookie === "off") {
        req.body.isRookie = false;
    }
    Card.create(req.body, (error, createdCard) => {
        res.redirect('/cards');
    })
})
//EDIT

//SHOW
router.get('/:id', (req,res)=>{
    Card.findById(req.params.id, (error, foundCard)=>{
        res.render('cards/Show', {
            card: foundCard
        })
    })
})


//EXPORT ROUTER
module.exports = router