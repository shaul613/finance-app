import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export const db = knex({
  client:'pg',
  connection:{
    connectionString:process.env.DB_URI,
    ssl: {rejectUnauthorized:false}
  }
})
// postgres://hooewudrthsuum:b7d19e92a703ad9cf9a41149560b3c35911756d5d5f83ebe599291502676db6a@ec2-107-23-76-12.compute-1.amazonaws.com:5432/d8hmo1eg35d6s5
