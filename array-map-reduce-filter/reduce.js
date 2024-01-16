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

console.log(averageCalories / menu.length);
