const express = require('express');
const app = express();

// Fetching
app.get('/', (req, res) => {
    res.send('Welcome to Express!');
}); 

// Update
// app.put();

// Patch 
// app.patch();

// Submit
// app.post(); 

// Delete
// app.delete(); 

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
