import { Request, Response } from "express";
import { CreateRestauranteService } from "../services/CreateRestauranteService";
import { RestauranteRepository } from "../repositories/RestauranteRepository";
import { ListRestauranteService } from "../services/ListRestauranteService";


export default {
    createRestaurante: async (request: Request, response: Response) => {
        try {
            const { titulo, descricao } = request.body;
            const createRestaurante = new CreateRestauranteService(new RestauranteRepository());
            const restaurante = await createRestaurante.execute(titulo, descricao);
            return response.json({
                error: false,
                message: 'Restaurante criado com sucesso',
                restaurante
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    listRestaurantes: async (request: Request, response: Response) => {
        try {
            const listRestaurantes = new ListRestauranteService(new RestauranteRepository());
            const restaurantes = await listRestaurantes.execute();
            return response.json({
                error: false,
                restaurantes
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    }
}