const express = require("express");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");

const app = express();

// Built-in Express middleware to parse form data (URL-encoded bodies)
app.use(express.urlencoded({ extended: true }));

// Homepage
app.get("/", (req, res) => {
  res.send(`
    <h1>Homepage</h1>
    <p><a href="/user">Go to User Form</a></p>
    <p><a href="/admin">Go to Admin Dashboard</a></p>
  `);
});

// Use routers
app.use(userRouter);
app.use(adminRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});