import { IRestauranteRepository } from "../types";

class CreateRestauranteService {

    constructor(private restauranteRepository: IRestauranteRepository) {}

    public async execute(titulo: string, descricao: string) {
        const restaurante = await this.restauranteRepository.createRestaurante(titulo, descricao);
        return restaurante;
    }
}

export { CreateRestauranteService }