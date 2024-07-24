

let add = document.getElementById("add");

let minus = document.getElementById("minus");

let reset = document.getElementById("reset");

let count = 0;

add.addEventListener('click',() =>{
    count ++;
    let counter = document.getElementById("count");
    counter.textContent = count
})

minus.addEventListener('click',() => {
    count --;
    let counter = document.getElementById("count");
    counter.textContent = count
})

reset.addEventListener('click',() =>{
    let counter = document.getElementById("count");
    count = 0;
    counter.textContent = count
})


