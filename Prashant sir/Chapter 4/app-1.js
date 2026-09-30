const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  // res.setHeader('Content-Type', 'json');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');

  if (req.url === "/docs") {
    res.write('<head><h1>Welcome to Docs</h1></head>');
    res.write('<body>This is our documentation page</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url === "/about") {
    res.write('<head><h1>Welcome to About</h1></head>');
    res.write('<body>This is our About page</body>');
    res.write('</html>');
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
