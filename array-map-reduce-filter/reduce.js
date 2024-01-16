const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 },
];

const averageCalories = menu.reduce((acc, curr) => {
  return acc + curr.calories;
}, 0);

// console.log(averageCalories / menu.length);

const product = {
  name: "AmazonBasics Apple Certified Lightning to USB Cable",
  price: 7.99,
  manufacturer: "Amazon",
  reviews: [
    {
      user: "Pavel Nedved",
      comments: "It was really useful, strongly recommended",
      rate: 4,
    },
    { user: "Alvaro Trezeguet", comments: "It lasted 2 days", rate: 1 },
    { user: "David Recoba", comments: "Awesome", rate: 5 },
    { user: "Jose Romero", comments: "Good value for money", rate: 4 },
    { user: "Antonio Cano", comments: "It broked really fast", rate: 2 },
  ],
};

const totalRate = product.reviews.reduce((acc, curr) => {
  return acc + curr.rate;
}, 0);

const averageRate = totalRate / product.reviews.length;
console.log(`total averageRate: ${averageRate}`);
