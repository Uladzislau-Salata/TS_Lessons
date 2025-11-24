const TOP = "Top";
const RIGHT = "Right";

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

const enum TimingFunc {
  EASE = "ease",
  EASE_IN = "ease-in",
  LINEAR = "linear",
}

const enum TimingFuncN {
  EASE = 1,
  EASE_IN = 2,
  LINEAR = EASE * 3,
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.RIGHT) {
    console.log(tFunc);
  }
}

frame("id", Directions.RIGHT, TimingFunc.LINEAR);
