
var numDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", clickHandle);

}

function clickHandle() {
    // this.style.color="red";
    var char = this.innerHTML;
    makesound(char);
    buttonAnimation(char);
}
    
document.addEventListener("keypress",function (event){
    makesound(event.key);
    buttonAnimation(event.key);
})
function makesound(key) {
    switch (key) {
        case "w":
            var X = new Audio("sounds/tom-1.mp3");
            X.play();
            break;
        case "a":
            var X = new Audio("sounds/tom-2.mp3");
            X.play();
            break;
        case "s":
            var X = new Audio("sounds/tom-3.mp3");
            X.play();
            break;
        case "d":
            var X = new Audio("sounds/tom-4.mp3");
            X.play();
            break;
        case "j":
            var X = new Audio("sounds/snare.mp3");
            X.play();
            break;
        case "k":
            var X = new Audio("sounds/crash.mp3");
            X.play();
            break;
        case "l":
            var X = new Audio("sounds/kick-bass.mp3");
            X.play();

    }
}
function buttonAnimation(currentkey){
    var activeKey=document.querySelector("."+currentkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100);
}