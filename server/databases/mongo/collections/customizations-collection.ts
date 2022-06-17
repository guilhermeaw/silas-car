import { db } from "../db.ts"

export interface Customization {
    _id: string;
    title: string;
    description: string;
    date: Date;
    img_url: string;
}

export const customizationsCollection = db.collection<Customization>("customizations"); 