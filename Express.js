const express = require('express'); // Import Express.js
const app = express(); // Create an Express app

// Set the server port
const PORT = 3000;

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Gian T. Catarinin' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
