const Koa = require('koa');

const app = new Koa();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

// response
console.log(`API is listening on port ${PORT} in ${NODE_ENV} mode`)

app.listen(PORT);
