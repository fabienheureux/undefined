import * as Koa from 'koa'
import { start as enablePrettyError } from 'pretty-error'
import * as KoaRouter from 'koa-router'
import * as KoaBody from 'koa-bodyparser'
import * as cors from 'kcors'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from './graphql'

enablePrettyError()

const app = new Koa()
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

router.post('/graphql', KoaBody(), graphqlKoa({ schema }))
router.get('/graphql', graphqlKoa({ schema }))
router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.get(
  '/graphiql',
  graphiqlKoa({
    endpointURL: '/graphql'
  })
)

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () =>
  console.log(`API is listening on port ${PORT} in ${NODE_ENV} mode`)
)




