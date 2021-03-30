import { Router } from 'express';
import { getClass, createClass } from '../controllers/class.controler';

const routes = Router();

routes.get('/class', getClass);
routes.post('/class', createClass);
// routes.get('/class/:id');
// routes.put('/class');
// routes.delete('/class/:id');

export default routes;
