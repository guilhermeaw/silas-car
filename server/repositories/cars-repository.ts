export interface CarCreateData {
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

export interface CarsRepository {
    create: (data: CarCreateData) => Promise<any>;
}

export interface CarUpdateData {
    _id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

export interface CarsRepository {
    update: (data: CarUpdateData, parameter:string) => Promise<any>;
}

export interface CarsRepository {
    delete: (data: string) => Promise<any>;
}