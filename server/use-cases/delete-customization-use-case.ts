import { CustomizationsRepository } from "../repositories/customizations-repository.ts";

interface DeleteCustomizationUseCaseRequest {
    id: string;
}

interface ErrorResponse {
    message: string;
}

interface CustomizationUseCaseResponse {
    status: number;
    body: null | ErrorResponse;
}

export class DeleteCustomizationUseCase {
    constructor( private CustomizationsRepository: CustomizationsRepository ) {}

    async execute(request: DeleteCustomizationUseCaseRequest): Promise<CustomizationUseCaseResponse> {
        const { id } = request;

        const customization = await this.CustomizationsRepository.findOne({ id });

        if (!customization) {
            return {
                status: 404,
                body: { message: `Customização não encontrada com o id ${id}.` }
            }
        }

        await this.CustomizationsRepository.delete({ id });

        return {
            status: 204,
            body: null
        }
    }
}