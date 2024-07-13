const lodash = require("lodash")
const myfunctions = require("./altscript")

console.log(lodash.shuffle([1,2,3,4])) // shuflles the list for example [4,3,1,2]

console.log(lodash.create([1,2,3 ])) // object return

console.log(lodash.add(4,3)) // adds first and second number and return sum of them

// my modules

console.log(myfunctions([1,2,5,66,11,22,44,918])) // says if list characters are even or odd