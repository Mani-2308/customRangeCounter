let startBtn = document.getElementById("startBtn");
let counterText = document.getElementById("counterText");

startBtn.onclick = function() {
    let fromUserInput = document.getElementById("fromUserInput");
    let toUserInput = document.getElementById("toUserInput");

    if (fromUserInput.value === "") {
        alert("Enter the from value");
    } else if (toUserInput.value === "") {
        alert("Enter the to value");
    } else {
        let startValue = parseInt(fromUserInput.value);
        counterText.textContent = startValue;

        let uniqueId = setInterval(function() {
            counterText.textContent = startValue;
            startValue = startValue + 1;
            if (startValue === parseInt(toUserInput.value) + 1) {
                clearInterval(uniqueId);
            }
        }, 1000);
    }
}
