type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isMyCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return "doors" in vehicle
}

// Usage
let myCarCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isMyCar(myCarCar)) {
  console.log(myCarCar.doors);
}