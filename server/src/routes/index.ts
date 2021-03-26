import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ checkMessage: 'Hello Server' }));

export default routes;
