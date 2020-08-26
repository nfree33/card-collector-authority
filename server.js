require('dotenv').config();

//___________________
//Dependencies
//___________________
const express = require('express');
const app = express ();
const mongoose = require ('mongoose');
const methodOverride  = require('method-override');
const db = mongoose.connection;

//PORT
const PORT = process.env.PORT || 3000;

//___________________
//CONNECT TO MONGODB
//___________________

const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI,  { useNewUrlParser: true});
db.once('open', ()=>{
    console.log('connected to mongo')
})
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


//STATIC PAGES

app.get('/' , (req, res) => {
  res.render('static/Home');
});

app.get('/about', (req, res) => {
    res.render('static/About')
})
app.get('/contact-us', (req, res) => {
    res.render('static/ContactUs')
})
app.get('/application', (req,res)=>{
    res.render('static/Application')
})
app.get('/buypage', (req,res)=>{
    res.render('static/BuyPage')
})





//CONTROLLER
const cardsController = require('./controllers/cards.js');
app.use('/cards', cardsController)

const oldSchoolController = require('./controllers/oldschool.js');
app.use('/oldschool', oldSchoolController)


// const applicationsController = require('./controllers/applications.js');
// app.use('/applications', applicationsController)



//LISTENER
app.listen(PORT, (req,res)=>{
    console.log("Collecting bugs... or cards")
})