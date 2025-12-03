// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }
function checkAnimalData(animal) {
    if (animal.status === "available") {
        return animal.data;
    }
    else {
        return "".concat(animal.data, ", you can try in ").concat(animal.data.nextUpdateIn);
    }
}
var res1 = {
    status: "available",
    data: {
        animal: "cat",
        breed: "корги",
        sterilized: "да",
        location: "Гродно",
        age: 5,
    },
};
checkAnimalData(res1);
