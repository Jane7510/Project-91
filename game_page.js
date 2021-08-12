function sendno(){
    number1 = document.getElementById("numberInput1").value;
    number2 = document.getElementById("numberInput2").value;
    answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + "x" + number2;
    input = "<br><br><h4>Answer: <input type='number' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'Checkans()' id = 'checkans'>Check</button>";
    div = question + input + check_button;
    document.getElementById("output").innerHTML = div;
}

