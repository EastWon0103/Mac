const clearBtn = document.querySelector("#clearBtn");
const calculatorDisplay = document.querySelector("#calculatorDisplay")
const numBtns = document.querySelectorAll(".numBtn");
const delBtn = document.querySelector("#delBtn");

function del(){
    var display = calculatorDisplay.innerText;
    calculatorDisplay.innerHTML = display.substring(0, display.length-1);
}

function clear(){
    calculatorDisplay.innerHTML = '';
}

function number(text){
    var num = text;
    calculatorDisplay.append(num);
}

function init(){
    clearBtn.addEventListener("click", clear);
    for (const numBtn of numBtns){
        numBtn.addEventListener('click', function(){number(numBtn.innerText);});
    }
    delBtn.addEventListener('click', del);
}
init();