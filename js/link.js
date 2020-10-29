const iconList = document.querySelectorAll("#dock img");

function safari(event){
    window.open("http://www.google.com",  
    "safari",
    "left=200px, top=150px, width=700px, height=600px");
};
function setting(event){console.log("2")};
function message(event){console.log("3")};
function weather(event){console.log("4")};
function information(event){
    window.open("information.html",  
    "safari",
    "left=200px, top=150px, width=700px, height=600px");
};

function papago(event){console.log("6")};
function calendar(event){console.log("7")};
function metro(event){console.log("8")};

function init(){
    const arr = [safari, setting, message, weather, information,
papago, calendar, metro];
    for(i=0;i<iconList.length;i++){
        iconList.item(i).addEventListener("click", arr[i]);
    }
}
init();