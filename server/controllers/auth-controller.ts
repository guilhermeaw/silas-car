import "https://deno.land/x/dotenv@v3.2.0/load.ts"
import { create, getNumericDate } from "https://deno.land/x/djwt@v2.1/mod.ts"

import { MongoUsersRepository } from "../repositories/mongo/mongo-users-repository.ts"
import { FindUserByEmailAndPasswordUseCase } from "../use-cases/find-user-by-email-and-password-use-case.ts"

const mongoUsersRepository = new MongoUsersRepository();

const findUserByEmailAndPasswordUseCase = new FindUserByEmailAndPasswordUseCase(mongoUsersRepository);

const auth = async ({ request, response,}: { request: any; response: any; }) => {
  
    if (!request.hasBody) {
        response.status = 400;
        response.body = "Bad request: body is missing";
        return;
    }

    const body = await request.body();
    const { email, password } = await body.value;

    const userResponse = await findUserByEmailAndPasswordUseCase.execute({ email, password });

    if (userResponse.status == 200) {
        response.status = userResponse.status;
        response.body = {
            token: await getToken( getPayload(email) ),
            user: userResponse.body
        }
    } else {
        response.status = userResponse.status;
        response.body = userResponse.body;
    }
}

function getToken(payload: any): Promise<string> {
    const secret = Deno.env.get("API_SECRET") as string;

    return create({ alg: "HS512", typ: "JWT" }, payload, secret);
}

function getPayload(email: string) {
    return {
        email,
        exp: getNumericDate(60 * 60)
    }
}

export { auth };