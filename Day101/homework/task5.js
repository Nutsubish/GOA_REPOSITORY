// 1. 
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

//2
const words = ['Goal', 'Oriented', 'Academy'];
const longWords = words.filter(word => word.length > 4);
console.log("Long words:", longWords);

//3

const products = [
  { name: 'bananas', category: 'fruits' },
  { name: 'potato', category: 'vegetable' },
  { name: 'Nikolozi', category: 'Human' },
];

const fruits = products.filter(product => product.category == 'fruits');
console.log("Fruit products:", fruits);



// 4.
const values = [null, 1, undefined, 2,];
const filteredValues = values.filter(value => value != null && value != undefined);
console.log("Filtered values:", filteredValues);

// 5. 


const numbersGreaterThanTen = numbers.filter(num => num > 10);
console.log("Numbers greater than 10:", numbersGreaterThanTen);





// 6. 
const startsWithG = words.filter(word => word.startsWith('G'));
console.log("Words starting with 'G':", startsWithG);





// 7. 
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0){
        return false;
    }
  }
};
const primeNumbers = numbers.filter(isPrime);
console.log("Prime numbers:", primeNumbers);









// 8. 
const users = [
  { name: 'Nika', age: 13 },
  { name: 'Berdo', age: 12 },
  { name: 'Gio', age: 15},
];
const toohighage = 14;
const userstoohighage = users.filter(user => user.age > toohighage);
console.log("Users over age 14:", userstoohighage);




// 9. 
const unique = numbers.filter((value, index, self) => self.indexOf(value) === index);
console.log("Unique numbers:", unique);

// 10. 
//? ver gavige kargad
