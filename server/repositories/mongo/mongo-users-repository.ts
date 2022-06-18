import { UsersRepository, UserFindByEmailAndPasswordData } from "../users-repository.ts";
import { usersCollection } from "../../databases/mongo/collections/users-collection.ts";

export class MongoUsersRepository implements UsersRepository {
    async findByEmailAndPassword({ email, password }: UserFindByEmailAndPasswordData) {
        return await usersCollection.findOne({ email, password });
    }
}
