var DOW = document.querySelector("#DOW");
var days = document.querySelector("#days");
var d = new Date();
var week = new Array('SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');

function getDateDays(){
    DOW.innerHTML = week[d.getDay()];
    days.innerHTML = d.getDate();
}

function init(){
    getDateDays();
    setInterval(getDateDays, 1000);
}
init();
