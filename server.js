// Express
const express = require('express');   // We are using the express library for the web server
const app     = express();            // We need to instantiate an express object to interact with the server in our code
const path = require('path');
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'Assets')));

PORT        = 8080;                 // Set a port number at the top so it's easy to change in the future


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
