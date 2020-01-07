const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);
const PORT = 3000;

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});