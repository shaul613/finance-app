import express from 'express';
import cors from 'cors';
import {db} from './connections/db.js';
import router from './routes/financialProducts.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT || 8080, () => {
  console.log('server up on port ', process.env.PORT || 5000);
});

app.use('/backend/products', router);
