export type PricingType = 
/**
   Select standard pricing if you charge the same price for each unit.
 **/ 
'Standard' |  

/***
   Select package pricing if you charge by the package, or group of units. 
   For example, say you charge $25.00 for every 5 units. Purchases are rounded up by default, 
   so a customer buying 8 units would pay $50.00.
 *  */ 
'Package' | 

/**
 * 
    Select graduated pricing if you use pricing tiers that may result in a different price for some units in an order. 
    For example, you might charge $10.00 per unit for the first 100 units and then $5.00 per unit for the next 50.
 */
'Graduated' |


/**
 * Select volume pricing if you charge the same price for each unit based on the total number of units sold. 
 * For example, you might charge $10.00 per unit for 50 units, and $7.00 per unit for 100 units.
 */
'Volume' |


//! RARELY USED
/**
 * Select customer chooses price if you want your customers to input their desired amount for your product or service.
 */
'Customer Chooses'
