import { ObjectId, Decimal128 } from 'mongodb';
import { PricingType } from '../types/pricing.type';


/**
 * {@link Price} handles {@link Item} pricing model.
 */
export class Price {
    _id: ObjectId; //// unique identifier

    pricing_model: PricingType;
    price: Decimal128 | number; //// actual price
    
    /** optional **/
    isRecurring?: boolean; //// is a recurring price charge

    /** optional **/
    isOneTime?: boolean; //// is a one time charge

    // billing_period: 

    isMetered?: boolean; //// lets you charge your customer based on usage at the end of billing period

    includeTax: boolean; //// include tax in price

    /** optional **/
    default_price?: boolean; //// most common price showed to the customer
}