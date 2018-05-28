import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {GET_AUTHORS} from './queries'

const Users = () => (
  <Query
    query={GET_AUTHORS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      return (
        <ul>
            {data.authors.map(({ nickName, id }) => <p key={id}> {nickName} </p>)}
        </ul>)
    }}
  </Query>
)

export default Users
