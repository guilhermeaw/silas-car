import { CustomizationCreateData, CustomizationUpdateData, CustomizationFindOneData, CustomizationDeleteData, CustomizationsRepository } from "../customizations-repository.ts";
import { customizationsCollection } from "../../databases/mongo/collections/customizations-collection.ts"
import { ObjectId } from "https://deno.land/x/mongo@v0.30.0/mod.ts";

export class MongoCustomizationsRepository implements CustomizationsRepository {
    async create({ title, description, date, img_url }: CustomizationCreateData) {
        return await customizationsCollection.insertOne({
            title,
            description,
            date,
            img_url
        });
    }

    async update({ id, title, description, date, img_url }: CustomizationUpdateData) {
        return await customizationsCollection.updateOne({ _id: new ObjectId(id) }, { $set: { title, description, date, img_url } });
    }

    async findOne({ id }: CustomizationFindOneData) {
        return await customizationsCollection.findOne({ _id: new ObjectId(id) });
    }

    async listAll() {
        return await customizationsCollection.find({}).sort({ date: -1 }).toArray();
    }

    async delete({ id }: CustomizationDeleteData) {
        return await customizationsCollection.deleteOne({ _id: new ObjectId(id) });
    }
}
