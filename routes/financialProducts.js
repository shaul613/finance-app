import express from 'express';
import {
  _getAllProducts,
  _allCreditCards,
  _allCrypto,
} from '../controllers/financialProducts.js';

const router = express.Router();

router.get('/all', _getAllProducts);
router.get('/cc_all', _allCreditCards);
router.get('/crypto_all', _allCrypto);

export default router;
