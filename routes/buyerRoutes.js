const express = require('express');
const router = express.Router();
const buyerController = require('../controllers/buyerController');
const { isLoggedInBuyer } = require('../middlewares/isLoggedIn');
const { uploadProfileImage, uploadProductImage, uploadVideo } = require('../middlewares/multer');

router.get('/auth/google', buyerController.googleAuth);
router.get('/google/callback', buyerController.googleAuth);
router.get('/auth-failed', buyerController.authFailed);
router.get('/authenticated', isLoggedInBuyer, buyerController.authenticated);
router.get('/logout', buyerController.logout);
router.get('/login', buyerController.getLogin);
router.post('/login', buyerController.postLogin);
router.get('/register', buyerController.getRegister);
router.post('/register', buyerController.postRegister);
router.get('/verify/:token', buyerController.verifyEmail);
router.get('/forgot-password', buyerController.getForgotPassword);
router.post('/forgot-password', buyerController.postForgotPassword);
router.get('/reset-password', buyerController.getResetPassword);
router.post('/reset-password', buyerController.postResetPassword);
router.get('/dashboard', isLoggedInBuyer, buyerController.getDashboard);
router.get('/productDetails/:productId', isLoggedInBuyer, buyerController.getProductDetails);
router.get('/productsPage', isLoggedInBuyer, buyerController.getProductsPage);
router.get('/profile', isLoggedInBuyer, buyerController.getProfile);
router.patch('/profile', isLoggedInBuyer, uploadProfileImage.single('profile-image'), buyerController.updateProfile);
router.get('/getMedia/:productId', isLoggedInBuyer, buyerController.getMedia);
router.post('/createOrder/:productId', isLoggedInBuyer, buyerController.createOrder);
router.get('/orderHistory', isLoggedInBuyer, buyerController.getOrderHistory);
router.get('/orderDetails/:orderId', isLoggedInBuyer, buyerController.getOrderDetails);


module.exports = router;
