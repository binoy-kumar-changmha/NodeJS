// fake database
const registeredHomes = [];

module.exports = class Home {
  constructor(homeName, price, location, rating, photoUrl) {
    this.homeName = homeName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // saving home method
  save() {
    registeredHomes.push(this);
  }

  // fetching all homes
  static fetchAll() {
    return registeredHomes;
  }
};
