import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Users from './users'

import logo from './logo.svg'
import './App.css'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Users />
          </div>
      </ApolloProvider>
    )
  }
}

export default App
