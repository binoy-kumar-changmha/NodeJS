const sum = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  // process.exit();
  // res.setHeader('Content-Type', 'json');

  if (req.url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><h1>Welcome to Home</h1></head>');
    res.write('<body>This is our homepage');
    res.write('<br><a href="/calculator"><h3>Calculator</h3></a>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url === "/calculator" && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><h1>Calculator</h1></head>');
    res.write('<body>');
    res.write('<form action="/sum" method="POST">');
    res.write('<label for="Number 1">Enter Number 1: </label>');
    res.write('<input type="text" name="Number 1" placeholder="Enter a number"><br><br>');
    res.write('<label for="Number 2">Enter Number 2: </label>');
    res.write('<input type="text" name="Number 2" placeholder="Enter a number"><br><br>');
    res.write('<input type="submit" value="Sum">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url === "/sum" && req.method === "POST") {
    return sum(req, res);
  }
  else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>404 Error</h1><p>Page not found.</p>');
    res.write('<a href="/">Go back home</a></body>');
    res.write('</html>');
    return res.end();
  }
};

module.exports = requestHandler;
