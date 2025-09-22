// server.fixed.js - versión corregida
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Usamos los middlewares por defecto (logger, static, CORS, etc.)
server.use(middlewares);

// Usamos rewriter para mapear rutas (debe ir antes de montar el router)
server.use(jsonServer.rewriter({
  '/tasks.json': '/tasks',
  '/tasks/:id.json': '/tasks/:id'
}));

// Simulamos latencia de 750 ms (opcional)
server.use((req, res, next) => {
  setTimeout(next, 750);
});

// Montamos el router (db.json)
server.use(router);

// Puerto (puedes cambiarlo con la variable de entorno PORT)
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server está corriendo en http://localhost:${PORT}`);
});

