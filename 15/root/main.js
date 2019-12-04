function calc() {
    var value1 = parseFloat(document.querySelector("#value1").value);
    // This also works
    //var value1 = parseFloat(document.getElementById("value1").value);
    var value2 = parseFloat(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    
    var result;
    if (operator == "add") {
        result = value1 + value2;
    } else if (operator == "min") {
        result = value1 - value2;
    } else if (operator == "div") {
        result = value1 / value2;
    } else if (operator == "mul") {
        result = value1 * value2;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}