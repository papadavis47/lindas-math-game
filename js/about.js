

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("Page for fun stuff");

    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 55) {
            document.getElementById("thanks").play();
        }
    })



});
