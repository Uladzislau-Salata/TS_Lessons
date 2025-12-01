const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log(method);
};

const reqOption = {
  url: "https://someurl.com",
  method: "GET",
} as const;

const str = "str";
const method = "GET";

fetchData("qqq", "GET");
// fetchData(reqOption.url, reqOption.method as "GET");
fetchData(reqOption.url, <"GET">reqOption.method);

const box = document.querySelector(".box") as HTMLElement;
const input = <HTMLInputElement>document.querySelector("input");

// const someNumber: number = input.value as any as number;
const someNumber: number = +input.value;
console.log(someNumber);
// box.style;
// box?.classList;
let a = "value" as const;

let b = { f: 100 } as const;
let c = [] as const;

let value = "value";
let arr = ["sd", "dff"];
let obj = { f: 100 };

// let T0 = value as const;

// let T5 =(Math.round(Math.random()*1)?'yes':'no')as const;
