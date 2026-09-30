const fs = require('fs');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  // process.exit();
  // res.setHeader('Content-Type', 'json');

  if (req.url === "/login" && req.method == "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
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
  else if (req.url.toLowerCase() === "/login" && req.method == "POST") {

    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody); // decoding
      const bodyObject = {}; // javascript object
      for (const [key, val] of params.entries()) {
        bodyObject[key] = val;
      };
      console.log(bodyObject)

      fs.writeFileSync("username.txt", JSON.stringify(bodyObject));
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><h1>Welcome to Home</h1></head>');
    res.write('<body>This is our homepage</body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = requestHandler;
