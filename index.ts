interface User {
  login: string;
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first",
  password: "qwerty",
  age: 50,
  addr: "qwdfsd",
};

let dbName: string;
sendUserDate(user, "rtrgrfds");
console.log(dbName!);

function sendUserDate(obj: User, db?: string): void {
  dbName = "1234";
  console.log(obj.parents!.mother?.toLowerCase(), db!.toLowerCase);
}
