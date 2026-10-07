const http = require('http');
const Error = require('./error');
const routes = require('./routes')

// const server = http.createServer((req, res) => {
//   console.log(res.url, req.method);
//   // Error();
// });

const server = http.createServer(routes);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
