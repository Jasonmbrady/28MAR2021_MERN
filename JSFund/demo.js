// var beatles = ['Paul', 'George', 'John', 'Ringo']; // Global Scope
// function printNames(names){
//     // printNames Scope
//     function actuallyPrintingNames(){
//         // actuallyPrintingNames Scope
//         for (let i=0; i < names.length; i++){ // for loop Scope
//             let name;
//             name = names;
//             console.log(name[i]);
//         }
//     }
// }

const person = {
    firstName: "Bob",
    lastName: "Marley",
    username: "barley",
    password: "myPassWord"
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// ES 6
const {username} = person;
const [,a,,b] = animals;
const password = "12345678";
const [animal1, animal2, ...theRest] = animals;
// animal1 = "horse"
// animal2 = "dog"
// theRest = ['fish', 'cat', 'bird']
const animalsTwo = [...animals];
animalsTwo.pop();
// animalsTwo = ['horse', 'dog', 'fish', 'cat']
// animals = ['horse', 'dog', 'fish', 'cat', 'bird']

// const myFunc = function addNums(num1, num2){
//     return num1 + num2;
// }
const addNums = (num1, num2) => {

    return num1 + num2;
}
console.log(addNums(5, 6)); // 11


