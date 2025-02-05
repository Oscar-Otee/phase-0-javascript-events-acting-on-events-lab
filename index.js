// Your code here

const dodger = document.getElementById("dodger");

// function for moving dodger left:
function moveDodgerLeft() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// function for moving dodger right:
function moveDodgerRight() {
    const left = parseInt(dodger.style.left.replace("px", ""), 10);

    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}


// Event listener function:
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowLeft") {
        moveDodgerRight();
    }
});