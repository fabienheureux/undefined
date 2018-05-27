import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Users = () => (
  <Query
    query={gql`
      {
        authors {
          id
          nickName
          posts {
            id
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return data.authors.map(({ nickName }) => <p>{ nickName }</p>)
    }}
  </Query>
)

export default Users
