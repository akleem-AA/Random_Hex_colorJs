let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

let color = "#";

let DIGIT_COUNT = 6;

for(let i = 0; i<DIGIT_COUNT ; i++){
    color +=arr[getRandomValue()]
}

function getRandomValue(){
    let random = Math.random() * arr.length;
    return Math.floor(random)
}

console.log(color)

document.body.style.backgroundColor = color;
