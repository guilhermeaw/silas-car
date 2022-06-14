import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { create, verify, decode, getNumericDate } from "https://deno.land/x/djwt@v2.1/mod.ts";

const auth = async ({ request, response,}: { request: any; response: any; }) => {
  
    if (!request.hasBody) {
        response.status = 400;
        response.body = "Bad request: body is missing";
        return;
    }

    const body = await request.body();
    const { email, password } = await body.value;

    // TODO: validate email and password

    const responseBody = {
        token: await getToken( getPayload(email) )
        // TODO: add user information
    }

    response.status = 200;
    response.body = responseBody;
};

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