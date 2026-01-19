const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ["sdad"];

interface IState {
  date: {
    name: string;
  };
  tag?: string;
}

// const state: Partial<IState> = {
//   data: {
//     name: "John",
//   },
// };

const strictState: Required<IState> = {
  date: {
    name: "sdasad",
  },
  tag: "qweqwdasd",
};

function action(state: Readonly<IState>) {
  state.date.name = "abc";
}
