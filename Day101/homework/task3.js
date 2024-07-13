const isActive = true;
isActive && console.log("True");



const userName = null;
const defaultUserName = userName || "GOAELI";


const age = 10;
const canVote = age >= 18 ? "Yes" : "No";

const user = { name: "nika" };
user && console.log(user.name);



const value1 = 3;
const value2 = 2;
const value3 = "Hello";
const firstTruthy = value1 || value2 || value3;



const number = -1000;
const message = number > 0 ? "good" : "less";
console.log(message);


// 7 ver gavige


const settings = { theme: null };
const theme = settings.theme || "default";



const text = "Hello";
const textLengthMessage = text.length > 5 ? "Long" : "Short";



const isLoggedIn = true;
const hasPermission = true;
isLoggedIn && hasPermission && console.log("Access granted.");