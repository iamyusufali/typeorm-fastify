import fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const app = fastify({ logger: true });
const PORT = process.env.PORT || 3000;

app.get('/', (request, reply) => {
  reply.send('Hello World!');
});

const startServer = async () => {
  try {
    await app.listen(PORT);
    console.log(`Server running at PORT ${PORT}`);
  } catch (error) {
    app.log.error(error);
    app.close();
  }
};

startServer();
