const doger = document.getElementById('dodger');
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
        if(left > 0) {
            doger.style.left = `${left - 1}px`;
        }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
        if(left < 360) {
            dodger.style.left = `${left + 1}px`
        } 
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Arrowleft") {
        moveDodgerLeft()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})