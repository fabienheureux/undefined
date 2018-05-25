import Koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import { graphqlKoa } from 'apollo-server-koa'

const app = new Koa()
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

// koaBody is needed just for POST.
router.post('/graphql', koaBody(), graphqlKoa({ schema: myGraphQLSchema }))
router.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }))

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

app.use(router.routes())
app.use(router.allowedMethods())

// response
console.log(`API is listening on port ${PORT} in ${NODE_ENV} mode`)

app.listen(PORT);

