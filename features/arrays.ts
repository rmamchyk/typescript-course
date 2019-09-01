const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Why do we use Typed Arrays?
// 1) Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) Prevent incompatible values adding to the array
// carMakers.push(100); // error
carMakers.push('honda');

// 3) Help with 'map', 'forEach', 'reduce' etc functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// 4) Flexible types - arrays can still contain multiple different types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-08');
importantDates.push(new Date());
