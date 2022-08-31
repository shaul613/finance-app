import {db} from '../connections/db.js';

// export const addLikeToMsg = (id) => {
//   return db('msg')
//   .increment('msg_likes', 1)
//   .where('msg_id', '=', id)
// };

export const addLikeToMsg = (msg_id, like_ip_address) => {
  return db('msg_likes')
  .insert({
    msg_id,
    like_ip_address
  })
  .catch(e => {
    console.log(e);
  })
};

export const getLikes = (msg_id) => {
  return db('msg_likes')
  .count(msg_id)
  .where({msg_id})
  .returning('*')
  .catch(e => {
    console.log(e);
  })
}
