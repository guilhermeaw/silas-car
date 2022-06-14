import { create, verify, decode, getNumericDate } from "https://deno.land/x/djwt@v2.1/mod.ts";

export async function authorized({ request, response }: { request: any; response: any; }, next: any) {
    
    try {
        const secret = Deno.env.get("API_SECRET") as string;

        const authorization = request.headers.get("Authorization");

        if (!authorization) {
            throw new Error("!authorization");
        }

        const [method, jwt] = authorization.split(" ");

        if (method !== "Bearer" || !jwt) {
            throw new Error("!jwt");
        }

        const payload = await verify(jwt, secret, "HS512");

        if (!payload) {
            throw new Error("!payload");
        }

        await next();
        
    } catch (err) {
        console.log(err);
        response.status = 401;
        response.body = "Unauthorized";
    }
}

