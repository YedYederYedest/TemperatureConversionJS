const textbox = document.getElementById("textbox");
const radiobtncelsius = document.getElementById("radiobtncelsius");
const radiobtnfahrenheit = document.getElementById("radiobtnfahrenheit");
const result = document.getElementById("result");

let temp;

function convert() {
    if (radiobtncelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "° Celsius";
    } else if (radiobtnfahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "° Fahrenheit";
    } else {
        result.textContent = "Select a Unit";
    }
}
