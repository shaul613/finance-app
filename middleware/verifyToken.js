import jwt from 'jsonwebtoken';
import {db} from '../connections/db.js';

export const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken
              || req.headers['x-acces-token']
              || req.headers['autherization']
  console.log('accessToken => ', accessToken);

  if(accessToken == null) return res.sendStatus(401);
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if(err) return res.sendStatus(403);
    try{
      const user = await db('users')
      .select('*')
      .where({
        username:decode.username
      })
      await next();
    } catch(e){
      return res.status(403);
    }
  })
}