//@flow
import React from 'react'
import { Query, Mutation } from 'react-apollo'
import {GET_AUTHORS, CREATE_AUTHORS} from './queries'

type PropTypes = { 
  
}

type StateTypes = { 
  nickName: string
}

class Users extends React.Component<PropTypes,StateTypes>{ 
  
  state = { 
    nickName : ''
  }

  handleCreateAuthor = createAuthor => (evt, value) => { 
    evt.preventDefault()

    createAuthor({
      variables : { 
        nickName : this.state.nickName
      },
      update: (store, {data:{createAuthor}}) => {
        const data = store.readQuery({ query: GET_AUTHORS });
        data.authors.push(createAuthor)
        store.writeQuery({ query: GET_AUTHORS, data });
      }
    })
  }

  render() { 
    return (
        <Query query={GET_AUTHORS}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>
            return (
              <div>
              <ul>
                  {data.authors.map(({ nickName, id }) => <li key={id}> {nickName} </li>)}
              </ul>

              <Mutation mutation={CREATE_AUTHORS}>
                {createAuthor => {
                    return (
                      <form onSubmit={this.handleCreateAuthor(createAuthor)}>
                        <label htmlFor='nickName'>
                          <input 
                            type='text' 
                            id='nickName' 
                            value={this.state.nickName} 
                            onChange={({target: {value}}) => this.setState({nickName:value})}/>
                        </label>
                        <button type='submit'> create author </button>
                      </form>
                    )
                }}
              </Mutation>
              </div>
            )
          }}
      </Query>
    )
  }
}


export default Users
