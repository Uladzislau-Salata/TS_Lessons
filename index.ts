// let num: Number = new Number(5);
// let num2: number = 5;
// let num3 = Number(5);

// num=num2;
// num2=num;

const num = 5;

const strNum: string = num.toString();

const str = "5";
const numStr: number = +str;

interface Depatment {
  name: string;
  budget: number;
}

const depatment: Depatment = {
  name: "web-dev",
  budget: 500,
};

interface Project {
  name: string;
  projectBudget: number;
}

function transfromDepartment(depatment: Depatment, amount: number): Project {
  return {
    name: depatment.name,
    projectBudget: amount,
  };
}

const mainProject: Project = transfromDepartment(depatment, 4400);

console.log(mainProject);
