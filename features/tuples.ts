// Tuple - array-like structure where each element represents some property of a record.
// Tuple usually contains multiple different properties to describe one single thing.
// Usually inside of Tuple you will mix and match many different types of data inside of it.
// Whilst Array - orginizes a collation of different records.

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias for drink tuple
type Drink = [string, boolean, number];

// When we're working with Tuple we have fixed order of elements.
const pepsi: Drink = ['brown', true, 40];
// pepsi[0] = 40; // error
// pepsi[2] = 'brown'; // error

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Usage: Tuples are not used much. Usually we can use then only for representing CSV / Excel data.
const carSpecs: [number, number] = [400, 3354];

// In all other case representing data via Objects is more obvious and understandable.
// If we use an object to model a record, it's really clear what we're working with at one glance.
const carStats = {
  horsepower: 400,
  weight: 3354
}