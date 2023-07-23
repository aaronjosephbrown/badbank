import { MongoClient, ServerApiVersion } from 'mongodb'
const uri =
  'mongodb+srv://aaronjosephbrown:Ao63JHUfntLyodF2@bad-bank-cluster0.6tzbqos.mongodb.net/?retryWrites=true&w=majority'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export { client }
