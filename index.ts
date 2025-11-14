const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: "John",
  messages: { error: "Error" },
};

const userDataTuple: [...boolean[], number, string] = [true, false, 40, "John"];
// userDataTuole[3];
// userDataTuole.push(50);
// userDataTuole[3];

const res = userDataTuple.map((t) => `${t}-data`);

const [bthd, age, userName] = userDataTuple;

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toLocaleUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));

const message: string | number = 5;

const messages: string[] | number[] = ["a", "b"];

// function printMsg(msg: string | number|boolean): void {
//   if (typeof msg === "string"|| typeof msg==='number') {
//     console.log(msg.toString());
//   } else {
//     console.log(msg);
//   }
//   console.log(msg);
// }

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "number") {
    console.log(msg.toFixed());
  } else {
    console.log(msg);
  }
}

printMsg(4);

const printRedings = (a: string | number, b: number | boolean): void => {
  if (a === b) {
    console.log(a, b);
  }
};

const printRedings2 = (a: string | number[]) => {
  console.log(a.slice(0, 3));
};

function checkReadings(readings: { system: number } | { user: number }): void {
  if ("system" in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
}

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}
