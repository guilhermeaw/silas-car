import { CarsRepository } from "../repositories/cars-repository.ts";

interface InsertCarUseCaseRequest {
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

interface CarResponse {
    id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
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
        const { title, description, date, img_url } = request;

        if (!title || !description || !date || !img_url) {
            return {
                status: 400,
                body: { message: "É necessário preencher todos os campos." }
            };
        }

        const id = await this.carsRepository.create({
            title,
            description,
            date,
            img_url
        });

        return {
            status: 201,
            body: {
                id,
                title,
                description,
                date,
                img_url
            }
        }
    }
}