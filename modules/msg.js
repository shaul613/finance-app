import {db} from '../connections/db.js';

export const addMsg = (title, name, msgbody, ip) => {
  name == '' ? name = 'Anonymous' : null;
  return db('msg')
  .insert({
    msg_title:title,
    msg_name:name,
    msg_body:msgbody,
    ip_address:ip
  })
}

export const allMsg = () => {
  return db('msg')
  .orderBy('msg_id')
  .returning('*');
}

export const getLikesForMessage = (id) => {
  return db('msg_likes')
  .count('*')
  .where({msg_id:id})
}

export const addLikeToMsg = (id) => {
  return db('msg')
  .increment('msg_likes', 1)
  .where('msg_id', '=', id)
};

export const addLikeToLikeTable = (msg_id, like_ip_address) => {
  return db('msg_likes')
  .insert({
    msg_id,
    like_ip_address
  })
  .catch(e => {
    console.log(e);
  })
};

export const isNotLiked = (id, address) => {
  return db('msg_likes')
  .count('*')
  .whereNotExists(
    db('msg_likes')
    .select('*')
    .whereRaw(`msg_id = ${id} and like_ip_address = ${address}`)
  )
  .catch(e => {
    console.log(e);
  })
}

export const getLikes = (msg_id) => {
  return db('msg_likes')
  .count('msg_id', {as:msg_id})
  .where({msg_id})
  .returning('*')
  .catch(e => {
    console.log(e);
  })
}
