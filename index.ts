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
