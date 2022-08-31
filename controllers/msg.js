import {
  addLikeToMsg,
} from '../modules/msg.js';

export const _addLikeToMsg = (req, res) => {
  console.log('added like');
  console.log(req.body.id);
  addLikeToMsg(req.body.id)
  .catch(e => {
    console.log(e);
  })
}
