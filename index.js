// Pull your server into this file and start it!
const server = require('./api/server')

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
  });