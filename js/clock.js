const jsClock = document.querySelector(".taskBarItem:nth-child(11)");

function getTime(){
    const date = new Date();
    const hour24 = date.getHours();
    const hours = (hour24 < 13 ? hour24 : hour24-12);
    const minutes = date.getMinutes();
    jsClock.innerText = `${hours<10 ? `0${hours}` : hours
        }:${minutes<10 ? `0${minutes}`:minutes} ${hour24<13 ? "AM":"PM"}`
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();