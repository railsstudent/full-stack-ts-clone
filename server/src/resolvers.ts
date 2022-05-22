import Db from "./db"
import { Resolvers } from "./resolvers-types.generated"
import queryTwitterResolvers from "./resolvers/Query"

export interface TwitterResolverContext {
    db: Db
}

const resolvers: Resolvers<TwitterResolverContext> = {
    Query: queryTwitterResolvers,
}

export default resolvers;
