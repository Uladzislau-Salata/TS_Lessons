interface Icompany {
  name: string;
  debts: number;
}

type CompanyKeys = keyof Icompany;
const keys: CompanyKeys = "name";

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S,
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: Icompany = {
  name: "HH",
  debts: 500000,
};

printDebts(hh, "name", "debts");

const google = {
  name: "Google",
  open: "true",
};

printDebts(google, "name", "open");
