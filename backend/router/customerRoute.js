import express from 'express';
import { getShop } from '../controllers/customerController.js';
const router = express.Router()

router.get('/',getShop)


export default router