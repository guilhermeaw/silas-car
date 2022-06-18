import { UsersRepository } from "../repositories/users-repository.ts";

interface FindUserByEmailAndPasswordUseCaseRequest {
    email: string;
    password: string;
}

interface UserResponse {
    name: string;
    email: string;
}

interface ErrorResponse {
    message: string;
}

interface UserUseCaseResponse {
    status: number;
    body: UserResponse | ErrorResponse;
}

export class FindUserByEmailAndPasswordUseCase {
    constructor( private UsersRepository: UsersRepository ) {}

    async execute(request: FindUserByEmailAndPasswordUseCaseRequest): Promise<UserUseCaseResponse> {
        const { email, password } = request;

        if (!email || !password) {
            return {
                status: 400,
                body: { message: "É necessário preencher todos os campos." }
            };
        }

        const user = await this.UsersRepository.findByEmailAndPassword({ email, password });

        if (!user) {
            return {
                status: 400,
                body: { message: 'Email ou senha inválidos.' }
            }
        }

        return {
            status: 200,
            body: {
                name: user.name,
                email: user.email
            }
        }
    }
}
