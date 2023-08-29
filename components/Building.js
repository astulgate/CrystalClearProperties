import Apartment from "./Apartment.js";

class Building {
  constructor(id, address, apartments) {
    this.id = id;
    this.address = address;
    this.apartments = apartments;
  }
}

export default Building;
