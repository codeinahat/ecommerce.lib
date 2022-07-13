
/**
 * {@link Profile} used to initialize client profile.
 */
export class Profile {
    _id: string; //// could be email or username 

    firstname: string;
    lastname: string;

    email?: string;
    
    phone: string;
    address: string;
    address2: string;
    city: string;
    
    state?: string;
    zipcode?: string;

    /**
     * Returns full name.
     * @returns string
     * @since v1.0.0
     */
    name() {
        return this.firstname + ' ' + this.lastname;
    }
}