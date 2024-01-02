const isLoggedInBuyer = (req, res, next) => {
    if (req.user && req.user.type === 'buyer') {
        next();
    } else {

        // res.status(401).json({ error: "You must be logged in as a Customer to do that!" });
        res.redirect('/buyer/login');
    }
};

const isLoggedInSeller = (req, res, next) => {
    if (req.user && req.user.type === 'seller') {
        next();
    } else {
        // res.status(401).json({ error: "You must be logged in as a Seller to do that!" });
        res.redirect('/seller/login');
    }
};

module.exports = {
    isLoggedInBuyer,
    isLoggedInSeller,
};
