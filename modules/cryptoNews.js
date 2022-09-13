import nc from 'node-cron';
import { pick } from "ramda";
import { fetchCryptoNews } from '../api_fetch/cryptoNews.js';
import { db } from '../connections/db.js';

export function enterCryptoNews() {
    nc.schedule('32 * * * *', async () => {
        console.log('nc started on 32');

        // clean
        await db('crypto_news')
            .del()
            .where('news_id', '!=', 'null')
            .then();

        const apiNews = await fetchCryptoNews();
        const dbNews = apiNews.map(convertNews);
        await db('crypto_news')
            .insert(dbNews)
            .catch(console.error);
    });
}

const convertNews = pick(["source", "title", "url"]);

export function getCryptoNews() {
    return db('crypto_news')
        .select('*')
        .orderBy('news_id');
}