const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 1. Middleware BEFORE body-parser (req.body is undefined here)
app.use((req, res, next) => {
  console.log("1st middleware (BEFORE body-parser):", req.path, req.method);
  console.log("req.body is:", req.body); // Will be undefined
  next(); 
});

// 2. Register body-parser middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded());

// 3. Middleware AFTER body-parser (req.body is populated with parsed form data)
app.use((req, res, next) => {
  console.log("2nd middleware (AFTER body-parser):", req.path, req.method);
  console.log("req.body is:", req.body); // Will show { username: '...', password: '...' }
  next();
});

app.get("/", (req, res, next) => {
  res.send(`<h1>This is homepage</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Showing contact-us form");
  res.send(`
  <form action="/contact-us" method="POST">
    <label for="username">Enter your username: </label>
    <input type="text" name="username" placeholder="Enter your username"><br><br>
    <label for="password">Enter your password: </label>
    <input type="password" name="password" placeholder="Enter your password"><br><br>
    <input type="submit" value="Submit">
  </form>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("POST /contact-us received password:", req.body ? req.body.password : undefined);
  res.send(`<h1>We will contact you soon! Received password: ${req.body ? req.body.password : 'none'}</h1>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});