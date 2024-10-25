let countEl = document.getElementById("count");
let saveEl = document.getElementById("save");


let num = 0;

function inc(){
    num = num +1;
    countEl.innerText = num;
}

function save(){
    let numStr = num + " - ";
    saveEl.textContent += numStr;
    num =  0;
    countEl.innerText = 0;
}