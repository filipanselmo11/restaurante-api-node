import { Restaurante } from "@prisma/client";

export interface IRestauranteRepository {
    createRestaurante(titulo: string, descricao: string): Promise<Restaurante>;
    listRestaurantes(): Promise<Restaurante[]>;
}