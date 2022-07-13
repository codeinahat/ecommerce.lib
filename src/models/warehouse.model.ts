import { Item } from './item.model';
import { ObjectId } from 'mongodb';


/**
 * {@link Warehouse} handles interacting with warehouses.
 */
export class Warehouse {
    _id: ObjectId;

    name: string;

    address: string;
    address2?: string;
    city: string;
    state?: string;
    zipcode?: string;

    items?: Item[]
}