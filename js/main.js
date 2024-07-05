class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showHumanInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    owner = null;

    constructor(brand, model, year, license){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.license = license;
    }

    assignOwner(owner){
        if(owner.age >= 18 ){
            this.owner = owner;
        } else {
            console.log(`${owner.name} must be at least 18y.o. to own a car.`);
        }
    }

    showCarInfo(){
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License: ${this.license}`);
        if(this.owner){
            this.owner.showHumanInfo();
        } else {
            console.log(`No owner has been found`);
        }
    }
}

const person1 = new Human('Petruchio', 16);
const person2 = new Human('Pedro', 87);
const person3 = new Human('Crystal', 21);

const car1 = new Car('Audi', 'Q5', 2017, 'AA3222PH');
const car2 = new Car('Honda', 'Accord', 2014, 'CE9321TA');
const car3 = new Car('Toyota', 'Camry', 1998, 'BH8765AE');

car1.assignOwner(person1);
car2.assignOwner(person2);
car3.assignOwner(person3);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();