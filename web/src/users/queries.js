import gql from 'graphql-tag'

export const GET_AUTHORS = gql`
{
    authors {
        id
        nickName
        posts {
            id
        }
    }
}`