const path = require("path");
const express = require("express");

// local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const { getHomes } = require("./Controllers/userController");
const { showErrorPage } = require("./Controllers/error");
const rootDir = require("./utils/path");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// Built-in Express middleware to parse form data (URL-encoded bodies)
app.use(express.urlencoded({ extended: true }));

// Serve static files (like output.css, images) from the public directory
app.use(express.static(path.join(rootDir, "public")));

// Use routers
app.use(userRouter);
app.use("/host", hostRouter);

// 404 Handler
app.use(showErrorPage);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
