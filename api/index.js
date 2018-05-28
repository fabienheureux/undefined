import Koa from 'koa'
import { start as enablePrettyError } from 'pretty-error'
import KoaRouter from 'koa-router'
import KoaBody from 'koa-bodyparser'
import cors from 'kcors'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from './graphql'

enablePrettyError()

const app = new Koa()
const router = new KoaRouter()
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
const NODE_ENV = process.env.NODE_ENV || 'development'

router.post('/graphql', KoaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))
router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql',
  })
)

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () =>
  console.log(`API is listening on port ${PORT} in ${NODE_ENV} mode`)
)
