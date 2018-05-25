const Koa = require('koa');

const app = new Koa();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4100
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

// response
console.log(`AUTH is listening on port ${PORT} in ${NODE_ENV} mode`)

app.listen(PORT);
