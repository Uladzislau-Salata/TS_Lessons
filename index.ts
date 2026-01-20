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

const google: Icompany = {
  name: "Google",
  debts: 500000,
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google;

const keys2: GoogleKeys = "debts";
