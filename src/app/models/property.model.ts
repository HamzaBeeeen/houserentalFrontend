import { PropertyOwner } from "./PropertyOwner.model";

export interface Property {
    id: number;
    title: string;
    description: string;
    type: string;
    address: string;
    city: string;
    price: number;
    imageUrls: string[];
    owner: PropertyOwner;
}