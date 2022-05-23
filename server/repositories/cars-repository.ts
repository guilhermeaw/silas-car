export interface CarCreateData {
    brand: string;
    model: string;
}

export interface CarsRepository {
    create: (data: CarCreateData) => Promise<any>;
}