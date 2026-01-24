// type Currencies = {
//   usa: "usd";
//   china: "cny";
//   ukraine: "uah";
//   kz: "tenge";
// };

interface Currencies {
  usa?: "usd";
  readonly china: "cny";
  ukraine: "uah";
  readonly kz: "tenge";
}

type CreateCustomCurr<T> = {
  -readonly [P in keyof T]-?: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
//   usa: string;
//   china: string;
//   ukraine: string;
//   kz: string;
// };

// type СопаставимыйТип={
//   [ПроизвольныйИндетификатор In Множество]:ПроизвольныйТипДанных
// }

type Keys = "name" | "age" | "role";

type User = {
  [K in Keys]: string;
};

const alex: User = {
  name: "Alex",
  age: "25",
  role: "admin",
};
