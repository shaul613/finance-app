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

export const allCrypto = () => {
  return db('crypto_exchange')
  .select('*')
  .join('product', 'product.product_id', '=', 'crypto_exchange.crypto_exchange_id')
  .orderBy('product.product_id')
}

export const addMsg = (title, name, msgbody) => {
  return db('msg')
  .insert({
    msg_title:title,
    msg_name:name,
    msg_body:msgbody
  })
}

export const allMsg = () => {
  return db('msg')
  .select('*')
  .returning('*');
}
