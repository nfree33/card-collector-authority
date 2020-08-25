const express = require('express');
const router = express.Router();
const OldSchool = require('../models/oldschool.js')

//ADD INDUCES ROUTES

//INDEX
router.get('/', (req,res)=>{
    OldSchool.find({},(error, allOld)=>{
        res.render('oldschool/Index', {
            oldschool: allOld
        });
    });
});

//NEW
router.get('/new', (req,res)=>{
    res.render('oldschool/New')
})

//DELETE
router.delete('/:id', (req,res)=>{
    OldSchool.findByIdAndDelete(req.params.id, (err, oldschool)=>{
        res.redirect('/oldschool')
    })
})


//UPDATE
router.put('/:id', (req,res)=>{
    req.body.isRookie = req.body.isRookie === "on" ? true : false;
    OldSchool.findByIdAndUpdate(req.params.id, req.body, {
        new: true }, (error, updatedModel) =>{
            res.redirect('/oldschool')
    })
})

//CREATE
router.post("/", (req, res) => {
    // console.oldschool(req.body)
    if (req.body.isRookie === "on") {
        req.body.isRookie = true;
    } else if (req.body.isRookie === "off") {
        req.body.isRookie = false;
    }
    OldSchool.create(req.body, (error, createdOld) => {
        res.redirect('/oldschool');
    })
})
//EDIT
router.get('/:id/edit', (req,res)=>{
    OldSchool.findById(req.params.id, (error, foundOld)=>{
        res.render('oldschool/Edit', {
            oldschool: foundOld
        })
    })
})

//SHOW
router.get('/:id', (req,res)=>{
    OldSchool.findById(req.params.id, (error, foundOld)=>{
        res.render('oldschool/Show', {
            oldschool: foundOld
        })
    })
})


//EXPORT ROUTER
module.exports = router