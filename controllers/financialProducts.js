import {
  getAllProducts,
  allCreditCards,
  allCrypto,
  addMsg,
  allMsg
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

export const _allCreditCards = (req, res) => {
  allCreditCards()
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    res.status(404).json({msg:'404 Not Found ', e})
  })
}

export const _allCrypto = (req, res) => {
  allCrypto()
  .then(data => {
    res.json(data)
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'404 Not Found ', e})
  })
}

export const _addMsg = (req, res) => {
  // console.log(req.body.msgbody);
  addMsg(req.body.title, req.body.name, req.body.msgbody, req.socket.remoteAddress)
  .then(()=>{
    res.redirect('/../../feedback');
  })
  .catch(e => {
    console.log(e);
  })
}

export const _allMsg = (req, res) => {
  allMsg()
  .then(data => {
    res.json(data);
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'404 Not Found'});
  })
}
