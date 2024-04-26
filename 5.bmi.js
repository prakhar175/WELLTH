function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === '' || height === '') {
        alert("Please fill in both weight and height");
        return;
    }

    var bmi = (weight / ((height * height) / 10000)).toFixed(2);
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Your BMI is: ' + bmi;

    var category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultDiv.innerHTML += '<br>Your BMI category is: ' + category;

    var button1 = document.createElement('button');
    button1.textContent = 'Click Here for Veg Diet Plan';
    button1.id='vegdiet';

    var button2 = document.createElement('button');
    button2.textContent = 'Click Here for Non-Veg Diet Plan';
    button2.id='non-vegdiet';

    button1.onclick = function () {
        if (bmi < 18.5) {
            window.location.href = 'underweight.html';
        } else if (bmi >= 18.5 && bmi < 25) {
            window.location.href = 'underweight.html';
        } else if (bmi >= 25 && bmi < 30) {
            window.location.href = 'overweight.html';
        } else {
            window.location.href = 'overweight.html';
        }
    };

    button2.onclick = function () {
        if (bmi < 18.5) {
            window.location.href = 'underweight_nv.html';
        } else if (bmi >= 18.5 && bmi < 25) {
            window.location.href = 'underweight_nv.html';
        } else if (bmi >= 25 && bmi < 30) {
            window.location.href = 'overweight_nv.html';
        } else {
            window.location.href = 'overweight_nv.html';
        }
    };

    button1.style.marginRight = '10px'; // Adding margin between buttons
    resultDiv.appendChild(button1);
    
    resultDiv.appendChild(button2);

}