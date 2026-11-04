// core modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");

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
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, 'data', 'home.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), err => {
        if (err) {
          console.log("Error: ", err);
        }
      });
    });
  }

  // fetching all homes
  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, 'data', 'home.json');
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err && data.length > 0 ? JSON.parse(data) : []);
    });
  }
};