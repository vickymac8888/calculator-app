function add(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value)

    let answer = document.getElementById("ans");
    answer.innerHTML = "Ans is" + " " + "=" + " " + (number1 + number2);
}

function sub(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let answer = document.getElementById("ans");
    answer.innerHTML = "Ans is" + " " + "=" + " " + (number1 - number2);
}

function mul(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let answer = document.getElementById("ans");
    answer.innerHTML = "Ans is" + " " + "=" + " " + (number1 * number2)
}

function div(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let answer = document.getElementById("ans");
    answer.innerHTML = "Ans is" + " " + "=" + " " + (number1 / number2);
}