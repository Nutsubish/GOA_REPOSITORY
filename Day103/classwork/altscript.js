const everynumber = (somelist) =>{
    for(let i = 0; i < somelist.length; i++){
        if(somelist[i] % 2 == 0){
            console.log(`this number  ${somelist[i]} is even`)
        }
        else{
            console.log(`this number ${somelist[i]} is odd`)
        }
    }
}

module.exports = everynumber