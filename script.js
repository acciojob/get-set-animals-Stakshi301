// Define the Animal class
class Animal {
  constructor(species) {
    this.species = species;
  }

  get species() {
    return this._species;
  }

  set species(value) {
    this._species = value;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species);  // Call the Animal constructor
  }

  purr() {
    console.log("purr");
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species);  // Call the Animal constructor
  }

  bark() {
    console.log("woof");
  }
}

// Expose the classes for testing in Cypress
window.Cat = Cat;
window.Dog = Dog;
window.Animal = Animal;
