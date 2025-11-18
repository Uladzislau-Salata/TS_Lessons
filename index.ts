let msg: "Hello" = "Hello";

msg = "Hello";

type Config = { protocol: "http" | "https"; port: 3000 | 3001 };
type Role = {
  role: string;
};
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const backupConfig: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "sysadmin",
};

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTiminFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;

function createAnimation(
  id: AnimationID,
  animaName: string,
  timingFunc: AnimationTiminFunc = "ease",
  duration: number,
  iterCount: "infinite" | number
): void {
  // const elem = document.querySelector(`#${id}`) as HTMLElement;
  // if (elem) {
  console.log(`${animaName} ${timingFunc} ${duration} ${iterCount}`);
  // elem.style.animation = `${animaName}${timingFunc}${duration}${iterCount}`;
  // }
}

createAnimation("id", "fade", "ease-in", 5, "infinite");
