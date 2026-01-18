// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface PlayerData<Game, Hours> {
  game: Game;
  hours: Hours;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: PlayerData<string, object> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

enum Names {
  RECT = "rect",
  TRIANGLE = "triangle",
  LINE = "line",
  CIRCLE = "circle",
}

interface DataOfFigures {
  name: Names;
  data?: Record<string, number> | null;
}

function calculateAmountOfFigures(figure: DataOfFigures[]): AmountOfFigures {
  let AFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  for (const k in figure) {
    // console.log(figure[k]?.name);
    switch (figure[k]?.name) {
      case Names.RECT:
        AFigures.squares += 1;
        break;
      case Names.TRIANGLE:
        AFigures.triangles += 1;
        break;
      case Names.LINE:
        AFigures.others += 1;
        break;
      case Names.CIRCLE:
        AFigures.circles += 1;
        break;
      default:
        break;
    }
  }

  return AFigures;
}

const data = [
  {
    name: Names.RECT,
    data: { a: 5, b: 10 },
  },
  {
    name: Names.RECT,
    data: { a: 6, b: 11 },
  },
  {
    name: Names.TRIANGLE,
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: Names.LINE,
    data: { l: 15 },
  },
  {
    name: Names.CIRCLE,
    data: { r: 10 },
  },
  {
    name: Names.CIRCLE,
    data: { r: 5 },
  },
  {
    name: Names.RECT,
    data: { a: 15, b: 7 },
  },
  {
    name: Names.TRIANGLE,
  },
];

console.log(calculateAmountOfFigures(data));
