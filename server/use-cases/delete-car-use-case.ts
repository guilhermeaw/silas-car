import { CarsRepository } from "../repositories/cars-repository.ts";

interface SuccessResponse {
    message: "Deletado com sucesso!";
}

interface ErrorResponse {
    message: string;
}

interface DeleteCarUseCaseResponse {
    status: number;
    message: SuccessResponse | ErrorResponse;
}

export class DeleteCarUseCase {
    constructor( private carsRepository: CarsRepository ) {}

    async execute(request: string): Promise<DeleteCarUseCaseResponse> {
        try {
            const id  = request;
            await this.carsRepository.delete(id);
    
            return {
                status: 200,
                message: {
                    message: "Customização deletada com sucesso!"
                }
            }
        } catch (error) {
            return {
                status: 404,
                message: {
                    message: "Customização não encontrada para exclusão do sistema."
                }
            }
        }
    }
}