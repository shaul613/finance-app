import {db} from '../connections/db.js';

export const addUser (username, fname, lname, password, phone, email) => {
  return db('users')
  .insert({
    username,
    fname,
    lname,
    password,
    phone,
    email
  })
}
