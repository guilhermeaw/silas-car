import { MongoCarsRepository } from "../repositories/mongo/mongo-cars-repository.ts"
import { InsertCarUseCase } from "../use-cases/insert-car-use-case.ts"

const mongoCarsRepository = new MongoCarsRepository();

const insertCarUseCase = new InsertCarUseCase(mongoCarsRepository);

const getCars = async ({ response }: { response: any }) => {
  response.body = "todo";
};

const insertCar = async ({ request, response,}: { request: any; response: any; }) => {
  const body = await request.body();
  const car = await body.value;

  const insertCarResponse = await insertCarUseCase.execute(car);

  response.status = insertCarResponse.status;
  response.body = insertCarResponse.body;
};

export { getCars, insertCar };
