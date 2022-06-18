import { db } from "../db.ts"

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export const usersCollection = db.collection<User>("users"); 