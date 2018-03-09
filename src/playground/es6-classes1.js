class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}


class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}


const me = new Traveler('Mike Bush', 40, 'San Diego');
const you = new Traveler('Genelle Clarke', 26);

const other = new Traveler();
console.log(me.getGreeting());

console.log(you.getGreeting());

console.log(other.getGreeting());