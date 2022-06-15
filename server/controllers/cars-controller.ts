import { MongoCarsRepository } from "../repositories/mongo/mongo-cars-repository.ts"
import { InsertCarUseCase } from "../use-cases/insert-car-use-case.ts"
import { UpdateCarUseCase } from "../use-cases/update-car-use-case.ts"
import { DeleteCarUseCase } from "../use-cases/delete-car-use-case.ts"

const mongoCarsRepository = new MongoCarsRepository();

const insertCarUseCase = new InsertCarUseCase(mongoCarsRepository);
const updateCarUseCase = new UpdateCarUseCase(mongoCarsRepository);
const deleteCarUseCase = new DeleteCarUseCase(mongoCarsRepository);

const getCars = async ({ response }: { response: any }) => {
  const data = await mongoCarsRepository.listAll();

  response.body = data;
};

const insertCar = async ({ request, response,}: { request: any; response: any; }) => {
  const body = await request.body();
  const car = await body.value;

  const insertCarResponse = await insertCarUseCase.execute(car);

  response.status = insertCarResponse.status;
  response.body = insertCarResponse.body;
};

const updateCar = async ({ request, response, params,}: { request: any; response: any; params:any; }) => {
  const body = request.body();
  const id = params.id;
  const { _id, title, description, date, img_url } = await body.value;

  const updateCarResponse = await updateCarUseCase.execute(
    {
      _id,
      title,
      description,
      date,
      img_url,
    }, id);

  response.status = updateCarResponse.status;
  response.body = updateCarResponse.body;
};

const deleteCar = async ({ response, params }: { response: any; params:any }) => {
  const id = params.id;

  const deleteCarResponse = await deleteCarUseCase.execute(id);

  response.status = deleteCarResponse.status;
  response.body = deleteCarResponse.message;
};

export { getCars, insertCar, updateCar, deleteCar };
