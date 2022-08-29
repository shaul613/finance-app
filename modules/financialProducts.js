import {db} from '../connections/db.js';

export const getAllProducts = () => { //all products from test table
  return db('products_test')
  .select('*')
  .orderBy('product_id')
};

export const allCreditCards = () => {
  return db('cc')
  .select('*')
  .join('product', 'product.product_id', '=', 'cc.cc_id')
  .orderBy('product.product_id')
}
