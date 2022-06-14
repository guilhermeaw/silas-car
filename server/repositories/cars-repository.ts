export interface CarCreateData {
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

export interface CarsRepository {
    create: (data: CarCreateData) => Promise<any>;
}