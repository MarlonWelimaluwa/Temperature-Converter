const temperature = document.getElementById("temperature");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const message = document.getElementById("message");
let temp;

function conversion() {
    if(toFahrenheit.checked) {
        temp = Number(temperature.value);
        temp = temp * 9 / 5 + 32;
        message.textContent = temp.toFixed(1) + "℉";
    }
    else if(toCelsius.checked) {
        temp = Number(temperature.value);
        temp = (temp - 32) * (5 / 9);
        message.textContent = temp.toFixed(1) + "℃";
    }
    else {
        message.textContent = "You have NOT selected any UNIT"
    }
}