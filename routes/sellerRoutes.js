const express = require('express');
const router = express.Router();
const sellerController = require('../controllers/sellerController');
const { isLoggedInSeller } = require('../middlewares/isLoggedIn');
const { uploadProfileImage, uploadProductImages, uploadVideos, uploadVideoImage } = require('../middlewares/multer');

// router.get('/', sellerController.oAuthLogin);
router.get('/auth/google', sellerController.googleAuth);
router.get('/google/callback', sellerController.googleAuth);
router.get('/auth-failed', sellerController.authFailed);
router.get('/authenticated', isLoggedInSeller, sellerController.authenticated);
router.get('/logout', sellerController.logout);
router.get('/login', sellerController.getLogin);
router.post('/login', sellerController.postLogin);
router.get('/register', sellerController.getRegister);
router.post('/register', sellerController.postRegister);
router.get('/verify/:token', sellerController.verifyEmail);
router.get('/forgot-password', sellerController.getForgotPassword);
router.post('/forgot-password', sellerController.postForgotPassword);
router.get('/reset-password', sellerController.getResetPassword);
router.post('/reset-password', sellerController.postResetPassword);


router.get('/dashboard', isLoggedInSeller, sellerController.getDashboard);
router.get('/viewProducts', isLoggedInSeller, sellerController.getProducts);
router.get('/productDetails/:productId', isLoggedInSeller, sellerController.getProductDetails);
router.get('/productsPage', isLoggedInSeller, sellerController.getProductsPage);
router.get('/orders', isLoggedInSeller, sellerController.getOrders);
router.post('/confirmOrder/:orderId', isLoggedInSeller, sellerController.confirmOrder);
router.get('/orderDetails/:orderId', isLoggedInSeller, sellerController.getOrderDetails);
router.get('/profile', isLoggedInSeller, sellerController.getProfile);
router.patch('/profile', isLoggedInSeller, uploadProfileImage.single('profile-image'), sellerController.updateProfile);
router.get('/getMedia/:productId', isLoggedInSeller, sellerController.getMedia);

router.post('/editProduct/:productId', isLoggedInSeller, uploadVideoImage.fields([
    { name: 'images', maxCount: 10 },
    { name: 'videos', maxCount: 2 },
]), sellerController.updateProduct);

router.get('/addProduct', isLoggedInSeller, sellerController.getAddProduct);
router.post('/addProduct', isLoggedInSeller, uploadVideoImage.fields([
    { name: 'images', maxCount: 10 },
    { name: 'videos', maxCount: 2 },
]), sellerController.postAddProduct);

router.delete('/deleteProduct/:productId', isLoggedInSeller, sellerController.deleteProduct);

module.exports = router;
