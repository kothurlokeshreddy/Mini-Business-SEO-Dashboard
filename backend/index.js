const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json());

const seoHeadlines = require('./utils/seoHeadlines');

app.post('/business-data', (req, res) => {
    const { businessName, location } = req.body;

    const randomRating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
    const randomReviews = Math.floor(Math.random() * 200) + 50;
    const randomHeadline = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)]
        .replace("{name}", businessName)
        .replace("{location}", location);

    return res.json({
        rating: parseFloat(randomRating),
        reviews: randomReviews,
        headline: randomHeadline
    });
});

app.get('/regenerate-headline', (req, res) => {
    const { businessName, location } = req.query;

    const randomHeadline = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)]
        .replace("{name}", businessName)
        .replace("{location}", location);

    res.json({ headline: randomHeadline });
});

app.listen(5000, () => {
    console.log(`Server running on http://localhost:5000`);
});
