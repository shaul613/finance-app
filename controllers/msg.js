import {
  addLikeToMsg,
  getLikes,
} from '../modules/msg.js';

// export const _addLikeToMsg = (req, res) => {
//   addLikeToMsg(req.body.id)
//   .catch(e => {
//     console.log(e);
//   })
// }

export const _addLikeToMsg = (req, res) => {
  addLikeToMsg(req.body.id, req.socket.remoteAddress)
  .catch(e => {
    console.log(e);
  })
}

export const _getLikes = (req, res) => {
  getLikes(req.body.id)
  .then(data => {
    res.json(data);
  })
}
