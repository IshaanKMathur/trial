const express = require('express');
const app = express();
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    console.log('Received body:', req.body);
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            error: "Invalid or missing data array in request body"
        });
    }
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item >= 'a' && item <= 'z');
    const highestLowercase = lowercaseAlphabets.length ? [lowercaseAlphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "aakash_kapoor_15082002",
        email: "aakash@example.com",
        roll_number: "21BCE2257",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(3000, () => console.log('Server running on port 3000'));
