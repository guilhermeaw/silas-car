import { CustomizationsRepository } from "../repositories/customizations-repository.ts";

interface UpdateCustomizationUseCaseRequest {
    id: string;
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

interface CustomizationUseCaseResponse {
    status: number;
    body: CustomizationResponse | ErrorResponse;
}

export class UpdateCustomizationUseCase {
    constructor( private CustomizationsRepository: CustomizationsRepository ) {}

    async execute(request: UpdateCustomizationUseCaseRequest): Promise<CustomizationUseCaseResponse> {
        const { id, title, description, date, img_url } = request;

        if (!title || !description || !date || !img_url) {
            return {
                status: 400,
                body: { message: "É necessário preencher todos os campos." }
            };
        }

        const customization = await this.CustomizationsRepository.findOne({ id });

        if (!customization) {
            return {
                status: 404,
                body: { message: `Customização não encontrada com o id ${id}.` }
            }
        }

        await this.CustomizationsRepository.update({
            id,
            title,
            description,
            date,
            img_url
        });

        const customizationUpdate = await this.CustomizationsRepository.findOne({ id });

        return {
            status: 200,
            body: customizationUpdate
        }
    }
}