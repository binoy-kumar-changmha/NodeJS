// built-in modules
const http = require('http');

// external modules
const express = require('express');

// local modules
const routes = require('./routes');

const app = express();

// using middlewares
app.use((req, res, next) => {
  console.log("We are in 1st middleware");
  next();
})
app.use((req, res, next) => {
  console.log("We are in 2nd middleware");
  res.send('<h1>Hello from Express!</h1>');
})

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
