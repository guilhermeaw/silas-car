import { CustomizationsRepository } from "../repositories/customizations-repository.ts";

interface InsertCustomizationUseCaseRequest {
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

interface CustomizationResponse {
    id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

interface ErrorResponse {
    message: string;
}

interface InsertCustomizationUseCaseResponse {
    status: number;
    body: CustomizationResponse | ErrorResponse;
}

export class InsertCustomizationUseCase {
    constructor( private CustomizationsRepository: CustomizationsRepository ) {}

    async execute(request: InsertCustomizationUseCaseRequest): Promise<InsertCustomizationUseCaseResponse> {
        const { title, description, date, img_url } = request;

        if (!title || !description || !date || !img_url) {
            return {
                status: 400,
                body: { message: "É necessário preencher todos os campos." }
            };
        }

        const id = await this.CustomizationsRepository.create({
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