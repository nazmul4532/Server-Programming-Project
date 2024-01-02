const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require("cookie-parser");
require('dotenv').config();
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require('./routes/app');

const app = express();
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(flash())
const path = require('path')
app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')
app.use(passport.initialize())
app.use(passport.session())

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});

//Connect to DB

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Connected to the Database'))
    .catch(err => console.log(err))




