import express from 'express';
import { createShopProducts, deleteShopProducts, getShopProducts, setupshop, updateShopProducts } from '../controllers/shopDashboardController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router()
import multer from 'multer';
const upload = multer({ dest: 'uploads/shopImage' })


router.get('/getshopproducts', authMiddleware, getShopProducts)
router.post('/createshopproduct', upload.single('productImage'),authMiddleware,createShopProducts)
router.post('/setupshop', upload.single('bannerImages'),authMiddleware,setupshop)
// router.get('/updateshopproducts',updateShopProducts)
// router.get('/deleteshopproducts',deleteShopProducts)

export default router