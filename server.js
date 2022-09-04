import express from 'express';
import cors from 'cors';
import {db} from './connections/db.js';
import router from './routes/financialProducts.js';
import msgRouter from './routes/msg.js';
import path from 'path';
import nc from 'node-cron';
// import cryptoNewsInsert from './db_insert/cryptoNews.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT || 8080, () => {
  console.log('server up on port ', process.env.PORT || 5000);
});

const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, 'client/build')));
//the following code is the path for Brave Browser Creator varification.
// app.use('/.well-known/brave-rewards-verification.txt', express.static(__dirname + '/.well-known/brave-rewards-verification.txt'));
app.use('/backend/products', router);
app.use('/backend/msg', msgRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname , './client/build','index.html'))
})

// cryptoNewsInsert();
nc.schedule('* * * * *', () => {
  console.log('running every minutes');
})
