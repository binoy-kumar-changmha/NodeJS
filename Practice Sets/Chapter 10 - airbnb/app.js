const path = require("path");
const express = require("express");
const rootDir = require("./utils/path");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");

const app = express();

// Built-in Express middleware to parse form data (URL-encoded bodies)
app.use(express.urlencoded({ extended: true }));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

// Use routers
app.use("/user", userRouter);
app.use("/host", adminRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  // changing status is important
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});