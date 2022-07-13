import { ObjectId, Decimal128 } from 'mongodb'
import { Price } from './price.model';

/**
 * {@link Item} base item class.
 */
export class Item {
    _id: ObjectId; //// unique identifier in database

    name: string; //// item name

    /** optional **/
    description?: string; //// item description
    
    /** optional **/
    image?: string; //// item image
    
    //? CAN BE ANOTHER CLASS ALL TOGETHER
    tax_category: Decimal128 | number; //// use to calculate product tax

    prices: Price[]; //// types of prices
}