// Annotating functions

const add = (a: number, b: number): number => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

// Annotation of anonymous functions
const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

// 'void' and 'never'
const throwError = (message: string): never => {
  throw new Error(message);
}

const checkError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
}

// Desctructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);