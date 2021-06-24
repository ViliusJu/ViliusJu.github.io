
"use strict";

let button = document.querySelector("#btn");
button.addEventListener("click", calcBMI);



function calcBMI() {
  let height = parseFloat(document.querySelector("#height").value).toFixed(2);
  let weight = parseFloat(document.querySelector("#weight").value).toFixed(2);
  let heightRegex = /^[0-2]\.\d{2}$/;
  let heigthTest = heightRegex.test(height);


  if (!heigthTest || height == 0) {
    result.innerHTML = "Įveskite teisingą savo ūgį";
    console.log("Error1"); //Something wrong with height
    console.log(height);
  } else if (weight === "" || isNaN(weight) || weight == 0) {
    result.innerHTML = "Įveskite teisingą savo svorį";
    console.log("Error2"); //Something wrong with weight
    console.log(weight);
  } else {
    console.log('OK'); //Calculate BMI
    console.log(weight);
    console.log(height);
    let bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
    console.log(bmi);

    if (bmi < 18.5) {
      result.innerHTML = "Jūsų kūno mases indeksas yra:" + " " + bmi + " " + "Jūsų svoris yra nepakankamas";
    } else if (bmi >= 18.5 && bmi < 25) {
      result.innerHTML = "Jūsų kūno mases indeksas yra:" + " " + bmi + " " + "Jūsų svoris yra normalus";
    } else if (bmi >= 25 && bmi < 30) {
      result.innerHTML = "Jūsų kūno mases indeksas yra:" + " " + bmi + " " + "Jūsų turite antsvorio";
    } else {
      result.innerHTML = "Jūsų kūno mases indeksas yra:" + " " + bmi + " " + "Jūsų esate nutukęs";
    }
  }
}



