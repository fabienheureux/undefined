import {
  Query as QueryPost,
  Mutation as MutationPost,
  Post,
} from '../data/models/Post'

import {
  Query as QueryAuthor,
  Mutation as MutationAuthor,
  Author,
} from '../data/models/Author'

export default {
  Query: { ...QueryPost, ...QueryAuthor },
  Mutation: { ...MutationPost, ...MutationAuthor },
  Post,
  Author,
}
