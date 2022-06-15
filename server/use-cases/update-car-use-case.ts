import { CarsRepository } from "../repositories/cars-repository.ts";

interface UpdateCarUseCaseRequest {
    _id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

interface CarResponse {
    _id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

interface ErrorResponse {
    message: string;
}

interface UpdateCarUseCaseResponse {
    status: number;
    body: CarResponse | ErrorResponse;
}

export class UpdateCarUseCase {
    constructor( private carsRepository: CarsRepository ) {}

    async execute(request: UpdateCarUseCaseRequest, id: string): Promise<UpdateCarUseCaseResponse> {
        const { _id, title, description, date, img_url } = request;

        if (!title || !description || !date || !img_url) {
            return {
                status: 400,
                body: { message: "É necessário preencher todos os campos." }
            };
        }

        await this.carsRepository.update(
            {
                _id,
                title,
                description,
                date,
                img_url
            }, id);

        return {
            status: 200,
            body: {
                _id,
                title,
                description,
                date,
                img_url
            }
        }
    }
}