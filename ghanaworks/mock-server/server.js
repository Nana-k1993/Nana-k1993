const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Add delay to simulate slow networks
server.use((req, res, next) => {
  setTimeout(next, 700);
});

server.use(middlewares);

// Simple middleware to accept idempotent posts with client-generated id
server.use(jsonServer.bodyParser);
server.post('/jobs', (req, res, next) => {
  if (req.body && req.body.clientId) {
    const db = router.db; // lowdb instance
    const existing = db.get('jobs').find({ clientId: req.body.clientId }).value();
    if (existing) {
      return res.status(200).json(existing);
    }
  }
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running at http://localhost:3001');
});
