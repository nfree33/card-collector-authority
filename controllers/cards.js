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
router.delete('/:id', (req,res)=>{
    Card.findByIdAndDelete(req.params.id, (err, card)=>{
        res.redirect('/cards')
    })
})


//UPDATE
router.put('/:id', (req,res)=>{
    req.body.isRookie = req.body.isRookie === "on" ? true : false;
    Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true }, (error, updatedModel) =>{
            res.redirect('/cards')
    })
})

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
router.get('/:id/edit', (req,res)=>{
    Card.findById(req.params.id, (error, foundCard)=>{
        res.render('cards/Edit', {
            card: foundCard
        })
    })
})

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