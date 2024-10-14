var hitrn;
function makeBubble(){
var clutter = "";
for (var i=1; i<177; i++){
        var rn = Math.floor(Math.random()*10);      
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector(".panelbotm").innerHTML= clutter;

}
function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent = hitrn;
}



var timer = 60;
function runTimer(){
    var timerinterval = setInterval(function(){
        if (timer > 0) {
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else {
            clearInterval(timerinterval);
            document.querySelector(".panelbotm").innerHTML = `<h1> Game Over </h1>`;
        }
    },1000);
}

document.querySelector(".panelbotm").addEventListener("click",function(details){
    var clickednumber = Number(details.target.textContent);
    if (clickednumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();

    } 
});







var score = 0;
function increaseScore(){
    score +=10;
    document.querySelector("#scorevalue").textContent = score;
}

runTimer();
makeBubble();
getNewHit();
