// Define the Animal class
class Animal {
  // Constructor accepting the species as a parameter
  constructor(species) {
    this.species = species;
  }

  // Getter method for the species
  get species() {
    return this._species;
  }

  // Setter method for the species to set the private _species property
  set species(value) {
    this._species = value;
  }

  // Method to log the sound the animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  // Constructor for the Cat class, passing species to the Animal constructor
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method to make the cat purr
  purr() {
    console.log("purr");
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  // Constructor for the Dog class, passing species to the Animal constructor
  constructor(species) {
    super(species); // Call the parent class constructor
  }

  // Method to make the dog bark
  bark() {
    console.log("woof");
  }
}

// Example Usage

// Create an instance of the Cat class
const myCat = new Cat("Siamese");
myCat.makeSound();  // Output: The Siamese makes a sound
myCat.purr();  // Output: purr

// Create an instance of the Dog class
const myDog = new Dog("Golden Retriever");
myDog.makeSound();  // Output: The Golden Retriever makes a sound
myDog.bark();  // Output: woof
