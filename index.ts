interface User {
  readonly login: string;
  password: string;
  age: number;
  // addr?: string;
  readonly addr: string | undefined;
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

const userFreeze: Readonly<User> = {
  login: "first",
  password: "qwerty",
  age: 50,
  addr: "qwdfsd",
};

userFreeze.age = 3345;
userFreeze.password = "123123";

// user.login = "asdvf";
user.password = "asdvf";

let dbName = "12345";

function sendUserDate(obj: User, db?: string): void {
  dbName = "1234";
  console.log(obj.parents?.mother?.toLowerCase(), db?.toLowerCase);
}

const baasicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
baasicPorts[0] = 5;
baasicPorts.push(4440);

// const baasicPorts: readonly number[] = [3000, 3001, 5555];
// baasicPorts[0] = 5;
// baasicPorts.push(4440);

// const baasicPorts: readonly [number, ...string[]] = [3000, "3001", "5555"];
// baasicPorts[0] = 5;
// baasicPorts.push(4440);
