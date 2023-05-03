"use strict";

window.onload = init;

function init() {
    const estimateBtn = document.getElementById("estimateBtn");
    estimateBtn.onclick = onEstimateBtnClicked;
}

function onEstimateBtnClicked() {
    const pickupDate = document.getElementById("pickupDate");
    const numberOfDays = document.getElementById("numberOfDays");
    const carRental = document.getElementById("carRental");
    const options = document.getElementById("options");
    const surcharge = document.getElementById("surcharge");
    const totalDue = document.getElementById("totalDue");
    let selectedOption = document.querySelector("input[name='choice']:checked");
    let ageOption = document.querySelector("input[name='age']:checked");

    
    if(selectedOption.value == "tollTag") {
      if(ageOption.value = "notUnderTwentyFive") {
        carRental.innerHTML = (Number(numberOfDays.value) * 29.99).toFixed(2);
        options.innerHTML =  (Number(numberOfDays.value) * 3.95).toFixed(2);
        surcharge.innerHTML = (Number(numberOfDays.value) * 29.99).toFixed(2);
        totalDue.innerHTML = carRental.innerHTML + options.innerHTML + surcharge.innerHTML;
      }
      else {
        carRental.innerHTML = Number(numberOfDays.value) * 29.99;
        options.innerHTML =  Number(numberOfDays.value)*3.95;
        surcharge.innerHTML = (30/100) * Number(numberOfDays.value) * 29.99;
        totalDue.innerHTML = carRental.innerHTML + options.innerHTML + surcharge.innerHTML;
      }
      
    }
    else if(selectedOption.value == "tollTag" && selectedOption.value == "gps") {
      if(ageOption.value == "notUnderTwentyFive") {
        carRental.innerHTML = Number(numberOfDays.value) * 29.99;
        options.innerHTML =  Number(numberOfDays.value)*(3.95 + 2.95);
        surcharge.innerHTML =  Number(numberOfDays.value) * 29.99;
        totalDue.innerHTML = carRental.innerHTML + options.innerHTML + surcharge.innerHTML;
      }
      else {
        carRental.innerHTML = Number(numberOfDays.value) * 29.99;
        options.innerHTML =  Number(numberOfDays.value)*(3.95 + 2.95);
        surcharge.innerHTML = (30/100) * Number(numberOfDays.value) * 29.99;
        totalDue.innerHTML = carRental.innerHTML + options.innerHTML + surcharge.innerHTML;
      }  
     
    }
    else {
      if(ageOption.value == "notUnderTwentyFive") {
        carRental.innerHTML = Number(numberOfDays.value) * 29.99;
        options.innerHTML =  Number(numberOfDays.value)*(3.95 + 2.95 + 2.95);
        surcharge.innerHTML = Number(numberOfDays.value) * 29.99;
        totalDue.innerHTML = carRental.innerHTML + options.innerHTML + surcharge.innerHTML;
      }
      else {
        carRental.innerHTML = Number(numberOfDays.value) * 29.99;
        options.innerHTML =  Number(numberOfDays.value)*(3.95 + 2.95 + 2.95);
        surcharge.innerHTML = (30/100) * Number(numberOfDays.value) * 29.99;
        totalDue.innerHTML = carRental.innerHTML + options.innerHTML + surcharge.innerHTML;
      }
      
    } 
  }
