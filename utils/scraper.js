// utils/scraper.js
const puppeteer = require('puppeteer');

const scrapeYouTube = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const data = await page.evaluate(() => {
        const title = document.querySelector('h1.title').innerText;
        const views = document.querySelector('.view-count').innerText;
        const description = document.querySelector('#description').innerText;
        const uploadDate = document.querySelector('.date').innerText;

        return { title, views, description, uploadDate };
    });

    await browser.close();
    return data;
};

module.exports = scrapeYouTube;
