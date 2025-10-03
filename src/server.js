import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import ContactsRouter from './routers/contacts.js';

import { errorHandler } from './middlewares/errorHandler,js';
import { notFoundHandler } from './middlewares/notFoundHadler.js';

const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(express.json())

  app.use('/contacts', ContactsRouter);

  app.use(errorHandler);

  app.use(notFoundHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
