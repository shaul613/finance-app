import {
  getAllProducts,
} from '../modules/financialProducts.js';

export const _getAllProducts = (req, res) => {
  getAllProducts()
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    res.status(404).json({msg:"404 Not Found"})
  })
}
