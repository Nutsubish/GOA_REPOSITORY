const HomeBtn = document.getElementById("Homebtn");

const Home = `
    <h1>Hello</h1>
    <p>Your At Home</p> 
`
const Aboutbtn = document.getElementById("Aboutbtn");

const About = `
    <h1>Bye</h1>
    <p>You were at About</p> 
`

let txt = document.getElementById("Text")

HomeBtn.addEventListener('click',function(){
    txt.innerHTML = Home
})
Aboutbtn.addEventListener('click',function(){
    txt.innerHTML = About
})  