function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (isNumber(msg)) {
    console.log(msg);
  } else {
    console.log(msg);
  }
  console.log(msg);
}

printMsg(4);

// function isNumber(n: string[] | number | boolean): n is number {
//   return typeof n === "number";
// }

function isNumber(n: unknown): n is number {
  return typeof n === "number";
}

interface Car {
  name: "car";
  engine: string;
  wheels: number;
}

interface Ship {
  name: "ship";
  engine: string;
  sail: string;
}

interface Airplane {
  name: "airplane";
  engine: string;
  wings: string;
}

interface SuperAirplane {
  name: "smth";
  engine: string;
  wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function isCar(car: Vehicle): car is Car {
  return "wheels" in car;
}

function isShip(ship: Vehicle): ship is Ship {
  return "sail" in ship;
}

function repairVehicle(vehicle: Vehicle) {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels);
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    case "smth":
      console.log(vehicle.wings);
      break;

    default:
      const smth: never = vehicle;
      console.log("Ouuups!");
  }

  // if (isCar(vehicle)) {
  //   vehicle.wheels;
  // } else if (isShip(vehicle)) {
  //   vehicle;
  // } else {
  //   vehicle.wings;
  // }
}

// const logBrtMsg = (
//   isBirthday: boolean,
//   userName: string,
//   age: number
// ): string => {
//   if (isBirthday === true) {
//     return `Congrats${userName}, age:${age + 1}`;
//   } else if (isBirthday === false) {
//     return "Without presents today";
//   }
//   return createError("Error");
// };
