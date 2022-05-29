import Db, { DbTweet, DbUser } from "./db"
import { Resolvers } from "./resolvers-types.generated"
import queryTwitterResolver from "./resolvers/Query"
import userTwitterResolver from "./resolvers/User"
import trendTwitterResolver from "./resolvers/Trend"
import tweetTwitterResolver from "./resolvers/Tweet"
import mutationTwitterResolver from "./resolvers/Mutation"

export interface TwitterResolverContext {
    db: Db,
    dbTweetCache: Record<string, DbTweet>,
    dbTweetToFavoriteCountMap: Record<string, number>
    dbUserCache: Record<string, DbUser>,
}

const resolvers: Resolvers<TwitterResolverContext> = {
    Query: queryTwitterResolver,
    Mutation: mutationTwitterResolver,
    Tweet: tweetTwitterResolver,
    User: userTwitterResolver,
    Trend: trendTwitterResolver,
}

export default resolvers;
