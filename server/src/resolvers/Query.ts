import { TwitterResolverContext } from "../resolvers"
import { QueryResolvers } from "../resolvers-types.generated"

const queryTwitterResolvers: QueryResolvers<TwitterResolverContext> = {
    currentUser: (_, _args, { db }) => {
      const [firstUser] =db.getAllUsers()
      if (!firstUser) {
        throw new Error(
          'currentUser was requested, but there are no users in the database'
        );
      }
      return firstUser
    },
    suggestions: (_, _args, { db }) => {
      return db.getAllSuggestions()
    },
}

export default queryTwitterResolvers