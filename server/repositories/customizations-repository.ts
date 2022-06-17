export interface CustomizationCreateData {
    title: string, 
    description: string, 
    date: Date, 
    img_url: string
}

export interface CustomizationUpdateData {
    id: string,
    title: string, 
    description: string, 
    date: Date, 
    img_url: string
}

export interface CustomizationFindOneData {
    id: string;
}

export interface CustomizationDeleteData {
    id: string;
}

export interface CustomizationsRepository {
    create: (data: CustomizationCreateData) => Promise<any>;
    update: (data: CustomizationUpdateData) => Promise<any>;
    findOne: (data: CustomizationFindOneData) => Promise<any>;
    delete: (data: CustomizationDeleteData) => Promise<any>;
}
