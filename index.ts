type voidFunc = () => void;

const retString: voidFunc = () => {
  //... some magic
  return "string";
};

const s = retString();
console.log(s);

const retNum: voidFunc = () => {
  //... some magic
  return 5;
};

const n = retNum();

console.log(n);

// function f2(): void {
//   return true;
// }

// const f3 = function (): void {
//   return true;
// };

const names = ["Anna", "John"];
const newArr = names.slice();

names.forEach((name, i, arr) => arr.push("Hey"));

// ывфыв