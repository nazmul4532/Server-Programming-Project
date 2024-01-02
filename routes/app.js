const express = require('express');
const router = express.Router();
const path = require('path');
const buyerRoutes = require('./buyerRoutes');
const sellerRoutes = require('./sellerRoutes');

router.get('/', (req, res) => {
    res.render('home');
});


router.use('/buyer', buyerRoutes);
router.use('/seller', sellerRoutes);

module.exports = router;
