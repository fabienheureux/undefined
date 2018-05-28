import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Users from './users'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  dataIdFromObject: o => o.id
})

const App = ()=>
  <ApolloProvider client={client}>
      <div className="App">
        <Users />
      </div>
  </ApolloProvider>

export default App
