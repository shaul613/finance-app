import {
  addLikeToMsg,
} from '../modules/msg.js';

export const _addLikeToMsg = (req, res) => {
  addLikeToMsg(req.params.id)
}
