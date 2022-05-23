import { CarCreateData, CarsRepository } from "../cars-repository.ts";
import { carsCollection } from "../../databases/mongo/collections/cars-collection.ts"

export class MongoCarsRepository implements CarsRepository {
    async create({ brand, model }: CarCreateData) {
        return await carsCollection.insertOne({
            brand,
            model
        });
    }
}