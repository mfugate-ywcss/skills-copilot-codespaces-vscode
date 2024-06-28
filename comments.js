// Create web server    
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
    res.send('Comments page');
});

// Listen on port 3000
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});