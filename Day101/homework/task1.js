// 1.         
const sum = (a, b) => a + b;



// 2.  
const reverseString = (str) => str.split('').reverse().join('');




// 3.       
const isEven = (num) => num % 2 === 0;



// 4. 
const arrayLength = (arr) => arr.length;



// 5. 


const rectangleArea = (width, height) => width * height;



// 6.  
const doubleArray = (arr) => arr.map(num => num * 2);




// 7. 
const toUpperCase = (str) => str.toUpperCase();


// 8. 
const filterOdds = (arr) => arr.filter(num => num % 2 === 0);



// 9. 
const factorial = (num) => {
    if (num <= 1){
        return 1
    };
    return num * factorial(num - 1);
};




// 10.
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
};