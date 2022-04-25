const app = require('express')();

const cors = require('cors');
import accessEnv from "./helper/accessEnv";
const typeDefs = require("./server/schema");
const StarWarsAPI = require("./server/StarWarsAPI");
const resolvers = require("./server/resolvers");
const { ApolloServer } = require("apollo-server-express");

// CORS configuration
// const corsOptions = {
//     origin: accessEnv("CLIENT_URL"),
//     credentials: true
// }

app.options('*',cors());
app.use((req:any,res: any ,next: any) => {
    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Content-Type","application/json");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE");

    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});


const serverApo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarsAPI: new StarWarsAPI(),
  }),
});

(async () => {
  await serverApo.start();
  serverApo.applyMiddleware({ app, path: "/graphql" });
})()


const port = accessEnv("SERVER_PORT");
const server = app.listen(port, ()=>{
  console.log(`🚀 Server ready at ${accessEnv("SERVER_URL")} ${serverApo.graphqlPath}`);
});

process.on('unhandleRejection', err => {
   console.log(err.name, err.message);
   console.log('UNHANDLED REJECTION! shutting down....');
   server.close(() => { process.exit(1); });
});
