import jwt from 'jsonwebtoken';
import {db} from '../connections/db.js';

export const verifyToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken
              || req.headers['x-acces-token']
              || req.headers['autherization']
  console.log('access token 3 -> ', accessToken);

  if(accessToken == null) return res.sendStatus(401);
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if(err) return res.sendStatus(403);
    try{
      const user = await db('users')
      .select('*')
      .where({
        username:decoded.username
      })
      await next();
    } catch(e){
      console.log('403');
      return res.status(403);
    }
  })
}
