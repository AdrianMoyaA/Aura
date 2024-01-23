export class House {
    id: String;
    city: String;
    street: String;
    country: String;
    owner: String;

    constructor(id: String, city: String, street: String, country: String, owner: String) {
        this.id = id;
        this.city = city;
        this.street = street;
        this.country = country;
        this.owner = owner;
    }
}