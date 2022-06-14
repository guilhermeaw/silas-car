import { CarCreateData, CarsRepository } from "../cars-repository.ts";
import { carsCollection } from "../../databases/mongo/collections/cars-collection.ts"

export class MongoCarsRepository implements CarsRepository {
    async create({ title, description, date, img_url }: CarCreateData) {
        return await carsCollection.insertOne({
            title,
            description,
            date,
            img_url
        });
    }

    async listAll() {
        return await carsCollection.find();
    }
}