import { db } from "../db.ts"

export interface Car {
    _id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

export const carsCollection = db.collection<Car>("cars");