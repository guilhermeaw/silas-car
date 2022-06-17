import { MongoCustomizationsRepository } from "../repositories/mongo/mongo-customizations-repository.ts"
import { InsertCustomizationUseCase } from "../use-cases/insert-customization-use-case.ts"
import { UpdateCustomizationUseCase } from "../use-cases/update-customization-use-case.ts"
import { DeleteCustomizationUseCase } from "../use-cases/delete-customization-use-case.ts"

const mongoCustomizationsRepository = new MongoCustomizationsRepository();

const insertCustomizationUseCase = new InsertCustomizationUseCase(mongoCustomizationsRepository);
const updateCustomizationUseCase = new UpdateCustomizationUseCase(mongoCustomizationsRepository);
const deleteCustomizationUseCase = new DeleteCustomizationUseCase(mongoCustomizationsRepository);

const listCustomizations = async ({ response }: { response: any; }) => {
  response.status = 200;
  response.body = await mongoCustomizationsRepository.listAll();
}

const insertCustomization = async ({ request, response }: { request: any; response: any; }) => {
  const body = await request.body();
  const customization = await body.value;

  const insertCustomizationResponse = await insertCustomizationUseCase.execute(customization);

  response.status = insertCustomizationResponse.status;
  response.body = insertCustomizationResponse.body;
};

const updateCustomization = async ({ params, request, response }: { params: { id: string }; request: any; response: any; }) => {
  const body = await request.body();
  const { title, description, date, img_url } = await body.value;
  const id = params.id;

  const updateCustomizationResponse = await updateCustomizationUseCase.execute({id, title, description, date, img_url});

  response.status = updateCustomizationResponse.status;
  response.body = updateCustomizationResponse.body;
}

const deleteCustomization = async ({ params, response }: { params: { id: string }; response: any; }) => {
  const id = params.id;

  const deleteCustomizationResponse = await deleteCustomizationUseCase.execute({ id });

  response.body = deleteCustomizationResponse.body;
  response.status = deleteCustomizationResponse.status;
}

export { listCustomizations, insertCustomization, updateCustomization, deleteCustomization };
