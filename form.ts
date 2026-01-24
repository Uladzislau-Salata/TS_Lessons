interface IForm {
  login: string;
  password: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: IValidate<IForm> = {
  login: { isValid: false, errorMsg: "At least 3 characters" },
  password: { isValid: true },
};

type IValidate<T> = {
  [P in keyof T]: { isValid: false; errorMsg: string } | { isValid: true };
};
