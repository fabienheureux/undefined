import gql from 'graphql-tag'

export const GET_AUTHORS = gql`
{
    authors {
        id
        nickName
    }
}`

 
export const CREATE_AUTHORS = gql`
mutation($nickName: String!){
    createAuthor(nickName: $nickName){
        id
        nickName
    }
}`;
