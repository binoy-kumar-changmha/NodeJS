const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("I am in first middleware", req.path, req.method);
  next();
})

app.use((req, res, next) => {
  console.log("I am in second middleware", req.path, req.method);
  next();
})

app.get("/", (req, res, next) => {
  res.send(`<h1>This is homepage</h1>`);
})

app.post("/contact-us", (req, res, next) => {
  console.log("I am in 3rd middleware", req.path, req.method);
  res.send(`<h1>We will contact you soon!</h1>`);
})

app.get("/contact-us", (req, res, next) => {
  console.log("We are in 4th middleware");
  res.send(`
  <form action="/contact-us" method="POST">
  <label for="username">Enter your username: </label>
  <input type="text" name="username" placeholder="Enter your username"><br><br>
  <label for="password">Enter your password: </label>
  <input type="password" name="password" placeholder="Enter your password"><br><br>
  <input type="submit">
  </form>`)
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
})