interface Currencies {
  usa: "usd";
  china: "cny";
  ukraine: "uah";
  kz: "tenge";
}

type CurrWithoutUSA = Omit<Currencies, "usa">; //исключение
type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; // фильтрация по свойству
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">; //удаление из union type

type FadeType = Exclude<MyAnimation, "swip">; //удаление из union type
type SwipeType = Extract<MyAnimation | Direction, "swip">; // выбор подходящего типа

type CreateCustomCurr<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "john";

type CustomCurrencies = CreateCustomCurr<Currencies>;
type GameDatacurr = Record<PlayersNames, CustomCurrencies>;

const gameData: GameDatacurr = {
  alex: {
    customChina: "qwqwqwq",
    customKz: "asdasd",
    customUkraine: "asdacxzz",
    customUsa: "asdfqwq",
  },
  john: {
    customChina: "qwqwqwq",
    customKz: "asdasd",
    customUkraine: "asdacxzz",
    customUsa: "asdfqwq",
  },
};

type MyAnimation = "fade" | "swip";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
