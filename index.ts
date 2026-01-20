interface Icompany {
  name: string;
  debts: number;
  departments: Department[];
  management: {
    owner: string;
  };
}

interface Department {
  [key: string]: string;
}

// let debts = "debts" as "debts";
// let debts: "debts" = "debts";
const debts= "debts";

type CompanyDebtsType = Icompany[typeof debts];
// type CompanyDebtsType = Icompany["debts"];
type CompanyOwnerType = Icompany["management"]["owner"];
type CompanyDepartmentsType = Icompany["departments"][number];
type CompanyDepartmentsTypes = Icompany["departments"];
type Test = Icompany[keyof Icompany];

type CompanyKeys = keyof Icompany;
const keys: CompanyKeys = "debts";

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S,
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google: Icompany = {
  name: "Google",
  debts: 500000,
  departments: {
    sales: "sales",
    developer: "dev",
  },
  management: {
    owner: "John",
  },
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = "debts";
