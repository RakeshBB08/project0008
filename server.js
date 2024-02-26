const express = require('express');
const bodyParser = require('body-parser'); // Optional if needed
const app = express();
const port = process.env.PORT || 5555; 

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});