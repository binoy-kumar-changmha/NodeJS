const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');

  if (req.url.toLowerCase() === "/men") {
    res.write('<body style="margin: 0; padding: 0;">');
    res.write('<div style="width: 100%; height: 5rem; padding: 20px; box-sizing: border-box; margin: 0; display: flex; justify-content: space-between; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">');

    res.write('<a href="/" >Home</a>');
    res.write('<a href="/men" >Men</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');

    res.write('</div>');
    res.write('<h1>This is Men Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/women") {
    res.write('<body style="margin: 0; padding: 0;">');
    res.write('<div style="width: 100%; height: 5rem; padding: 20px; box-sizing: border-box; margin: 0; display: flex; justify-content: space-between; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">');

    res.write('<a href="/" >Home</a>');
    res.write('<a href="/men" >Men</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');

    res.write('</div>');
    res.write('<h1>This is Women Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/kids") {
    res.write('<body style="margin: 0; padding: 0;">');
    res.write('<div style="width: 100%; height: 5rem; padding: 20px; box-sizing: border-box; margin: 0; display: flex; justify-content: space-between; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">');

    res.write('<a href="/" >Home</a>');
    res.write('<a href="/men" >Men</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');

    res.write('</div>');
    res.write('<h1>This is Kids Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url.toLowerCase() === "/cart") {
    res.write('<body style="margin: 0; padding: 0;">');
    res.write('<div style="width: 100%; height: 5rem; padding: 20px; box-sizing: border-box; margin: 0; display: flex; justify-content: space-between; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">');

    res.write('<a href="/" >Home</a>');
    res.write('<a href="/men" >Men</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');

    res.write('</div>');
    res.write('<h1>This is Cart Section</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else {
    res.write('<body style="margin: 0; padding: 0;">');
    res.write('<div style="width: 100%; height: 5rem; padding: 20px; box-sizing: border-box; margin: 0; display: flex; justify-content: space-between; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">');

    res.write('<a href="/" >Home</a>');
    res.write('<a href="/men" >Men</a>');
    res.write('<a href="/women">Women</a>');
    res.write('<a href="/kids">Kids</a>');
    res.write('<a href="/cart">Cart</a>');

    res.write('</div>');
    res.write('<h1>This is Home</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
