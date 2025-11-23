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

const dbName = "12344";
function sendUserDate(obj: User, db?: string): void {
  console.log(obj.parents?.mother?.toLowerCase(), db?.toLowerCase);
}
