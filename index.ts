interface infoAnimal {
  animal: "cat" | "dog" | "bird";
  breed: string;
  sterilized?: string;
}

interface res1Data extends infoAnimal {
  location: string;
  age?: number;
}

interface response1 {
  status: "available";
  data: res1Data;
}

interface response2 {
  status: "not available";
  data: {
    message: string;
    nextUpdateIn: Date;
  };
}

function checkAnimalData(animal: response1 | response2): res1Data | string {
  if (animal.status === "available") {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}

const res1: response1 = {
  status: "available",
  data: {
    animal: "cat",
    breed: "корги",
    sterilized: "да",
    location: "Гродно",
    age: 5,
  },
};

const res2: response2 = {
  status: "not available",
  data: {
    message: "Sorry, no dogs were found matching your criteria.",
    nextUpdateIn: new Date(2025, 11, 12),
  },
};

console.log(checkAnimalData(res1));
console.log(checkAnimalData(res2));

type Animal = "cat" | "dog" | "bird";

// Можно и не создавать перечисление, но вдруг в будущем статусов будет больше?

enum AnimalStatus {
  Available = "available",
  NotAvailable = "not available",
}

interface AnimalData {
  animal: Animal;
  breed: string;
  sterilized?: string;
}
// Не повторяем код, используем extends
interface AnimalAvailableData extends AnimalData {
  location: string;
  age?: number;
}

interface AnimalNotAvailableData {
  message: string;
  nextUpdateIn: Date;
}

// Интерфейсы стоит разделить, так как оба ответа будут иметь поле data
// И только по статусу будет сложно определить данные

interface AnimalAvailableResponse {
  status: AnimalStatus.Available;
  data: AnimalAvailableData;
}

interface AnimalNotAvailableResponse {
  status: AnimalStatus.NotAvailable;
  data: AnimalNotAvailableData;
}

type Res = AnimalAvailableResponse | AnimalNotAvailableResponse;

function isAvailable(res: Res): res is AnimalAvailableResponse {
  if (res.status === AnimalStatus.Available) {
    return true;
  } else {
    return false;
  }
}

function checkAnimalData(animal: Res): AnimalAvailableData | string {
  if (isAvailable(animal)) {
    return animal.data;
  } else {
    return `${animal.data.message}, you can try in ${animal.data.nextUpdateIn}`;
  }
}
