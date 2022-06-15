import { CarCreateData, CarUpdateData, CarsRepository } from "../cars-repository.ts";
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

    async update({ _id, title, description, date, img_url }: CarUpdateData, id: string) {
        // console.log("mongo-cars-repository");
        // console.log(id);
        // const value = await carsCollection.find({_id: id});
        // console.log(value);

        return await carsCollection.updateOne(
            {_id: {"oid":id}},
            { 
                $set: {
                    title,
                    description,
                    date,
                    img_url
                }
            });
    }

    async listAll() {
        return await carsCollection.find();
    }

    async delete(id: string) {
        // console.log("Delete");
        // console.log(id);
        // const value = await carsCollection.findOne({_id: id});
        // console.log(value);

        return await carsCollection.deleteOne({_id: new Object(id)});
    }
}