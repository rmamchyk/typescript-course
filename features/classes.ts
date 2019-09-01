// Class - a blueprint to create an object with some fields (values) 
// and methods (functions) to represent a thing.

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
console.log(car.color);

// Usage: Interfaces and Classes are the primary tools we use in typescript.
// So, in typescript app the classes are used very heavily.




export default {}
