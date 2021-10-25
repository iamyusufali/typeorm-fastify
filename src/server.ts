import fastify from 'fastify';
import dotenv from 'dotenv';
import fastifyOrmPlugin from 'fastify-typeorm-plugin';
import { createConnection, getRepository } from 'typeorm';

import { User } from './databases/entities/User.entity';

dotenv.config();

const app = fastify({ logger: true });
const PORT = process.env.PORT || 3000;

app.get('/users', async (request, reply) => {
  const users = await User.find();

  reply.send({ data: users });
});

const connectDatabase = async () => {
  try {
    const connection = await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'ormuser',
      password: 'password',
      database: 'testtypeorm',
      synchronize: true,
      logging: true,
      entities: [User],
    });

    await app.register(fastifyOrmPlugin, { connection });

    // const user = User.create({
    //   email: 'testone@gmail.com',
    //   firstName: 'Test',
    //   lastName: 'One',
    //   username: 'testone',
    // });

    // await user.save();

    console.log('Connected to database.');
  } catch (error) {
    throw Error(error as string);
  }
};

const startServer = async () => {
  try {
    await connectDatabase();
    await app.listen(PORT);
    console.log(`Server running at PORT ${PORT}`);
  } catch (error) {
    app.log.error(error);
    app.close();
  }
};

startServer();
