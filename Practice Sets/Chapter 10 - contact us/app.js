const path = require("path");

const express = require('express');

const rootDir = require("./utils/path");
const contactRouter = require("./routes/contact-us");

const app = express();
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
})
app.use("/contact-us", contactRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
})