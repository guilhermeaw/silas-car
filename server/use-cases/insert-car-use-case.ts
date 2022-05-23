import { CarsRepository } from "../repositories/cars-repository.ts";

interface InsertCarUseCaseRequest {
    brand: string;
    model: string;
}

interface CarResponse {
    id: string;
    brand: string;
    model: string;
}

interface ErrorResponse {
    message: string;
}

interface InsertCarUseCaseResponse {
    status: number;
    body: CarResponse | ErrorResponse;
}

export class InsertCarUseCase {
    constructor( private carsRepository: CarsRepository ) {}

    async execute(request: InsertCarUseCaseRequest): Promise<InsertCarUseCaseResponse> {
        const { brand, model } = request;

        if (!brand || !model) {
            return {
                status: 400,
                body: { message: "Brand and model are required." }
            };
        }

        const id = await this.carsRepository.create({
            brand,
            model
        });

        return {
            status: 201,
            body: {
                id,
                brand,
                model
            }
        }
    }
}