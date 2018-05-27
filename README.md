# undefined
`getElementByDid`

## Description
Here is an app to talk about the shitty code you can write.
It is still *A LOT* in progress.
Like...there is still no app, almost.


## Setup
Install `docker`
Run `docker-compose up -d` in root directory

| Service\Range   | 000         | 100   | 200   | 300   | 400   |
|---------------- |-----------  |------ |-----  |-----  |-----  |
| Front: 3*       | Web         |       |       |       |       |
| Back: 4*        | API         | Auth  |       |       |       |
| Database: 5*    | Rethinkdb   |       |       |       |       |
| Monitoring: 9*  | Portainer   |       |       |       |       |

## Graphql
To add some data to the database through graphiql, you can go to `http://localhost:4000/graphiql`

### Add data
```
mutation {
  createAuthor(nickName: "Fabienheureux")
}
```

### Get data
```
{
  authors {
    id
    firstName
    lastName
    posts
  }
}
```

## Credits
@tokalazy sort of got the idea for this project.
His code is the main source of inspiration.


