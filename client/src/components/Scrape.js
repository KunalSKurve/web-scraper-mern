// src/components/Scrape.js
import React, { useState } from 'react';
import api from '../api';

const Scrape = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleScrape = async () => {
        if (!url) {
            setError('Please enter a URL.');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await api.post('/scrape', { url });
            setData(response.data);
        } catch (error) {
            setError('Scraping failed. Please check the URL and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Scrape Data</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
            />
            <button onClick={handleScrape} disabled={loading}>
                {loading ? 'Scraping...' : 'Scrape'}
            </button>
            {data && (
                <div>
                    <h3>Scraped Data:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Scrape;
