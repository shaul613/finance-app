import {db} from '../connections/db.js';

export const getAllProducts = () => {
  return db('products_test')
  .select('*')
  .orderBy('product_id')
};
