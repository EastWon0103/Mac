const dock = document.querySelector("#dock");
const wrap = document.querySelector('#wrap');
const icon = document.querySelector("#dock img");

function move(event){
    dock.classList.add('active');
}

function remove(event){
    dock.classList.remove('active');
}

function init(){
    wrap.addEventListener('mouseover', move);
    wrap.addEventListener('mouseout', remove);
}

init();