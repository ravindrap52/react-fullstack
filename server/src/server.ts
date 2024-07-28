import express from 'express';
import mongoose from 'mongoose';
import httpServer from 'http';
import { ApolloServer } from 'apollo-server';
import { config } from './config/config';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})
// When successfully connected
mongoose.connection.on('connected', async () => {
  console.info(`Mongoose default connection open to ${config.mongo.host}`);
  const serverInfo = await apolloServer.listen({port: 5000});
  console.info(`Server is running on url ${serverInfo.url}`);
});

// If the connection throws an error
mongoose.connection.on('error', err => {
  console.error(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.warn('Mongoose default  connection disconnected');
});

// If the Node process ends, close mongo connection
process.on('SIGINT', () => {
  console.info('Mongoose default connection disconnected');
  mongoose.connection.close();
});

/** Healthcheck */
app.get('/ping', (req, res) => res.status(200).json({ status: 'success' }));

export async function listen() {
  console.log({ level: 'info', message: 'Open mongoose connection.' });
  await mongoose.connect(config.mongo.url);
  httpServer
    .createServer(app)
    .listen(config.server.port, () => console.info(`Server is running on port ${config.server.port}`));
}
