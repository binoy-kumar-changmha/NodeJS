const http = require('http');
const sum = require('./sum');

const server = http.createServer(sum);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
