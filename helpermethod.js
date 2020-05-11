const displayCities = () => {
  const cities = [
    "Lagos",
    "Nairobi",
    "Abuja",
    "Port Harcourt",
    "Kano",
    "Kinshasa",
    "Kuala Lumpur",
  ];

  for (let i = 0; i < 7; i++) {
    let city = cities[i];
    console.log(city);
    console.log(i);
  }
};

displayCities();

let x = 10;
let r = 5;

const printLastTrue = x && r && "I want bread";
console.log(printLastTrue);
