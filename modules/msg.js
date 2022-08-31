import {db} from '../connections/db.js';


export const addLikeToMsg = (id) => {
  return db('msg')
  .increment('msg_likes', 1)
  .where({msg_id:id});
};
