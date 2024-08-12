// routes/scraper.js
const express = require('express');
const scrapeYouTube = require('../utils/scraper');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/scrape', auth, async (req, res) => {
    const { url } = req.body;
    try {
        const data = await scrapeYouTube(url);
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
