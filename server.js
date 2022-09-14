import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { enterCryptoNews } from './modules/cryptoNews.js';
import cryptoNewsRouter from './routes/cryptoNews.js';
import router from './routes/financialProducts.js';
import msgRouter from './routes/msg.js';
import authRouter from './routes/users.js';

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' || 'https://finance-di.herokuapp.com',
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('server up on port ', PORT);
});

const __dirname = path.resolve();

app.use('/', express.static(path.join(__dirname, 'client/build')));
//the following code is the path for Brave Browser Creator varification.
// app.use('/.well-known/brave-rewards-verification.txt', express.static(__dirname + '/.well-known/brave-rewards-verification.txt'));
app.use('/backend/products', router);
app.use('/backend/msg', msgRouter);
app.use('/backend/cryptonews', cryptoNewsRouter);
app.use('/backend/auth', authRouter);
app.get('*', (_, res) =>
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
);

enterCryptoNews();
