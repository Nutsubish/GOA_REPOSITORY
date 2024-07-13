// 1.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

// 2. 
let strings = ["html", "css", "javascript"];
let uppercased = strings.map(str => str.toUpperCase());
console.log(uppercased); 

// 3.
let objects = [
    {name: "NIKA", age: 13}, 
    {name: "BERDO", age: 12}, 
    {name: "GIO", age: 16},
];
let names = objects.map(obj => obj.name);
console.log(names); 

// 4.
let numbersPlusFive = numbers.map(num => num + 5);
console.log(numbersPlusFive); 

// 5.
let squareRoots = numbers.map(num => Math.sqrt(num));
console.log(squareRoots);

// 6. 
let dates = [new Date('2024.07.07'), new Date('2024.07.08'),];
let fixeddates = dates.map(date => date); 
console.log(fixeddates);


// 7. 
let stringLengths = strings.map(str => str.length);
console.log(stringLengths); 



// 8. 
let prefixedStrings = strings.map(str => "Hello, " + str);
console.log(prefixedStrings);



// 9. 
let isEven = numbers.map(num => num % 2 === 0);
console.log(isEven); 


//10
// ? 