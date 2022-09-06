import {
  addUser
} from '../modules/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {db} from '../connections/db.js';

export const _addUser = async(req, res) => {
  const password = req.body.password;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  addUser(
    req.body.username,
    req.body.fname,
    req.body.lname,
    hashPassword,
    req.body.phone,
    req.body.email
  )
  .catch(e => {
    console.log(e);
    res.status(404).json({msg:'Sorry, username already exists.'})
  })
}

export const login = async(req, res) => {
  try{
    const user = await db('users')
    .select('*')
    .where({
      username:req.body.username
    })
    .returning('*')
    if(user.length == 0){
      return res.status(404).json({msg:'Username not found'})
    }
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if(!match){
      console.log(user[0].password);
      console.log(req.body.password);
      return res.status(400).json({msg:'Wrong password'});
    }
    const username = user[0].username;
    const email = user[0].email;
    const fname = user[0].fname;
    const lname = user[0].lname;
    const phone = user[0].phone;

    const accessToken = jwt.sign({username, email, fname, lname, phone}, process.env.ACCESS_TOKEN_SECRET,{
      expiresIn:'180s'
    });

    console.log(accessToken);

    res.cookie('accessToken', accessToken, {
      httpOnly:true,
      maxAge:180 * 1000
    });
    res.json(accessToken);
  } catch(e){
    res.status(404).json({msg:'Username not found'})
  }
}

export const logout = (req, res) => {
  const accessToken = req.cookies.accessToken;
  console.log('access token 1 -> ', accessToken);
  if(!accessToken){
    console.log('att logout');
    return res.status(204);
  }
  console.log('logout');
  res.clearCookie('accessToken');
  console.log('access token 2 -> ', accessToken);
  return res.status(200);
}
