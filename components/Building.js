import Apartment from "./Apartment.js";

class Building {
  constructor(id, address, apartments, image) {
    this.id = id;
    this.address = address;
    this.apartments = apartments;
    this.image = image;
  }
}

export default Building;
