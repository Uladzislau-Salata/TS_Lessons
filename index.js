var fetchData = function (url, method) {
    console.log(method);
};
var reqOption = {
    url: "https://someurl.com",
    method: "GET",
};
var str = "str";
var method = "GET";
fetchData("qqq", "GET");
// fetchData(reqOption.url, reqOption.method as "GET");
fetchData(reqOption.url, reqOption.method);
var box = document.querySelector(".box");
var input = document.querySelector("input");
var someNumber = +input.value;
console.log(someNumber);
// box.style;
// box?.classList;
