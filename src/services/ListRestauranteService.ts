import { IRestauranteRepository } from "../types";


class ListRestauranteService {
    constructor(private restauranteRepository: IRestauranteRepository) {}

    public async execute() {
        const restaurantes = await this.restauranteRepository.listRestaurantes();
        return restaurantes;
    }
}

export { ListRestauranteService }