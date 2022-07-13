import { Item } from './item.model';
import { Size } from './size.model';

/**
 * {@link Clothe} extends {@link Item} class. Clothe class is more fit to handle
 * a clothing store items.
 *  
 */
export class Clothe extends Item {



    fabric?: string; //// type clothing item fabric

    size?: Size[];//// clothing size
}