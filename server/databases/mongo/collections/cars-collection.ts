import { db } from "../db.ts"

export interface Car {
    _id: string;
    brand: string;
    model: string;
}

export const carsCollection = db.collection<Car>("cars");