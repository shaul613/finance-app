import express from 'express';
import {
  _getAllProducts,
  _allCreditCards,
  _allCrypto,
  _addMsg,
} from '../controllers/financialProducts.js';

const router = express.Router();

router.get('/all', _getAllProducts);
router.get('/cc_all', _allCreditCards);
router.get('/crypto_all', _allCrypto);
router.post('/add_msg', _addMsg)

export default router;
