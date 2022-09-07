import {
  addMsg,
  allMsg,
  addLikeToMsg,
  getLikes,
  addLikeToLikeTable,
  isNotLiked,
} from '../modules/msg.js';

export const _addMsg = (req, res) => {
  // console.log(req.body.msgbody);
  addMsg(req.body.title, req.body.name, req.body.msgbody, req.socket.remoteAddress)
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

export const _addLikeToMsg = (req, res) => {
  const ip = req.headers['X-Forwarded-For'] || req.socket.remoteAddress;
  addLikeToMsg(req.body.id)
  .then(() => {
    addLikeToLikeTable(req.body.id, ip)
  })
  .catch(e => {
    console.log(e);
    res.status(401).json({msg:'Unauthorized'})
  })
}

// export const _addLikeToLikeTable = (req, res) => {
//   addLikeToLikeTable(req.body.id, req.socket.remoteAddress)
//   .catch(e => {
//     console.log(e);
//   })
// }

export const _getLikes = (req, res) => {
  getLikes(req.params.id)
  .then(data => {
    res.json(data);
  })
}
