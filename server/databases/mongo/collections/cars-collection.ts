import { db } from "../db.ts"
import { Bson  } from "https://deno.land/x/mongo@v0.22.0/mod.ts";
// import ObjectId from "mongodb"

export interface Car {
    _id: Bson.ObjectId;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

export const carsCollection = db.collection<Car>("cars");