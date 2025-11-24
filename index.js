// let smth: unknown;
// smth = "str";
// let data: string[] = smth;
// data.find((e) => e);
// const someValue:unknown=10;
// someValue.method();
function fetchData(data) {
    if (typeof data === "string") {
        console.log(data.toLowerCase());
    }
}
var userData = '{"isBirthdayData":true,"ageData":40, "userNameData":"John"}';
function safeParse(s) {
    return JSON.parse(s);
}
var data = safeParse(userData);
function transferData(d) {
    if (typeof d === "string") {
        console.log(d.toLowerCase());
    }
    else if (typeof d === "object" && d) {
        console.log(data);
    }
    else {
        console.error("Some error");
    }
}
transferData(data);
