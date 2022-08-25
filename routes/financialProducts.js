import express from 'express';
import {
  _getAllProducts,
} from '../controllers/financialProducts.js';

const router = express.Router();

router.get('/all', _getAllProducts);

export default router;
