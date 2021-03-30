import express from 'express';
import routes from './routes/class.routes';

const app = express();
app.use(express.json());
app.use(routes);

export default app;
