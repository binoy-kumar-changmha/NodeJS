const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  // res.setHeader('Content-Type', 'json');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');

  if (req.url === "/login") {
    res.write('<head><h1>Welcome to Login</h1></head>');
    res.write('<body>');
    res.write('<form action="/login" method="POST">');
    res.write('<label for="username">Enter your username: </label>');
    res.write('<input type="text" name="username" placeholder="Enter your username"><br><br>');
    res.write('<label for="password">Enter your password: </label>');
    res.write('<input type="password" name="password" placeholder="Enter your password"><br><br>');
    res.write('<input type="submit" value="Login">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  // else if (req.url === "/about") {
  //   res.write('<head><h1>Welcome to About</h1></head>');
  //   res.write('<body>This is our About page</body>');
  //   res.write('</html>');
  //   return res.end();
  // }
  else if (req.url.toLowerCase() === "login" && req.method == "POST") {
    fs.writeFileSync("username.txt", 'username');
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  else {
    res.write('<head><h1>Welcome to Home</h1></head>');
    res.write('<body>This is our homepage</body>');
    res.write('</html>');
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
