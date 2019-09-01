// Interface - creates a new type, describing the property names and value types of an object.
// We can use any type inside of our interface annotation, we're not limited just to primitive values.
// We can express functions definitions inside of interfaces as well.
// We can use single Interface to describe the shape (the different properties) of very different objects

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);



// Converting the block of code to a js module in order to
// avoid name errors conflicting with same name in other files.
export default {};