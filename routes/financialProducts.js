import express from 'express';
import {
  _getAllProducts,
  _allCreditCards,
} from '../controllers/financialProducts.js';

const router = express.Router();

router.get('/all', _getAllProducts);
router.get('/cc_all', _allCreditCards)

export default router;
