import { prismaClient } from "../database";
import { IRestauranteRepository } from "../types";


class RestauranteRepository implements IRestauranteRepository {
    public async createRestaurante(titulo: string, descricao: string): Promise<{ id: number; titulo: string; descricao: string; createdAt: Date; }> {
        const restaurante = await prismaClient.restaurante.create({
            data: {
                titulo,
                descricao
            },
        });
        return restaurante;
    }

    public async listRestaurantes(): Promise<{ id: number; titulo: string; descricao: string; createdAt: Date; }[]> {
        const restaurantes = await prismaClient.restaurante.findMany();
        return restaurantes;    
    }
}

export { RestauranteRepository }