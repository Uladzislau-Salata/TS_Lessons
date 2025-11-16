var msg = "Hello";
msg = "Hello";
var port3000 = 3000;
var port3001 = 3001;
function startServer(protocol, port) {
    if (port === 3000 || port === 3001) {
        console.log("Server started on ".concat(protocol, "://server:").concat(port));
    }
    else {
        console.error("Invalid port");
    }
    return "Server started";
}
startServer("https", 3001);
function createAnimation(id, animaName, timingFunc, duration, iterCount) {
    if (timingFunc === void 0) { timingFunc = "ease"; }
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log("".concat(animaName, " ").concat(timingFunc, " ").concat(duration, " ").concat(iterCount));
    // elem.style.animation = `${animaName}${timingFunc}${duration}${iterCount}`;
    // }
}
createAnimation("id", "fade", "ease-in", 5, "infinite");
