var retString = function () {
    //... some magic
    return "string";
};
var s = retString();
console.log(s);
var retNum = function () {
    //... some magic
    return 5;
};
var n = retNum();
console.log(n);
// function f2(): void {
//   return true;
// }
// const f3 = function (): void {
//   return true;
// };
var names = ["Anna", "John"];
var newArr = names.slice();
names.forEach(function (name, i, arr) { return arr.push("Hey"); });
