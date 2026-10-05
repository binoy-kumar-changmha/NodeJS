const requestSumHandler = (req, res) => {

    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = {};
      for (const [key, val] of params.entries()) {
        bodyObject[key] = val;
      }
      
      const sumResult = Number(bodyObject['Number 1']) + Number(bodyObject['Number 2']);

      // this has to be written in req.on('end') function 
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><h1>Welcome to Summation Page</h1></head>');
      res.write(`<body>The sum is ${sumResult}</body>`);
      res.write('<a href="/"><h3>Home</h3></a>');
      res.write('<a href="/calculator"><h3>Calculator</h3></a>');
      res.write('</html>');
      return res.end();
    });
};

module.exports = requestSumHandler;
