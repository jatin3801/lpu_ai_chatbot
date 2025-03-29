const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic API that takes a query and responds with "Hello {query}"
app.get('/api/hello', (req, res) => {
    const query = req.query.name || "World";
    res.json({ message: `Hello ${query}!` });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
