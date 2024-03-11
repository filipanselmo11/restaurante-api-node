import express from 'express';
import RestauranteController from '../controllers/RestauranteController';
const routes = express();

routes.post('/restaurantes', RestauranteController.createRestaurante);
routes.get('/restaurantes', RestauranteController.listRestaurantes);

export { routes };