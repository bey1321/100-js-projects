$(document).ready(function () {
    const celsiusEl = $("#celsius-Value");
    const fahrenheitEl = $("#fahrenheit-Value");
    const kelvinEl = $("#kelvin-Value");
  
    function computeTemp(event) {
      const currentValue = +$(event.target).val();
  
      switch ($(event.target).attr("name")) {
        case "celsius":
          kelvinEl.val((currentValue + 273.32).toFixed(2));
          fahrenheitEl.val((currentValue * 1.8 + 32).toFixed(2));
          break;
        case "fahrenheit":
          celsiusEl.val(((currentValue - 32) / 1.8).toFixed(2));
          kelvinEl.val(((currentValue - 32) / 1.8 + 273.32).toFixed(2));
          break;
        case "kelvin":
          celsiusEl.val((currentValue - 273.32).toFixed(2));
          fahrenheitEl.val(((currentValue - 273.32) * 1.8 + 32).toFixed(2));
          break;
        default:
          break;
      }
    }
  
    // Add event listeners to the input fields
    celsiusEl.on("input", computeTemp);
    fahrenheitEl.on("input", computeTemp);
    kelvinEl.on("input", computeTemp);
  });
  

// const celsiusEl = document.getElementById("celsius-Value");
// const fahrenheitEl = document.getElementById("fahrenheit-Value");
// const kelvinEl = document.getElementById("kelvin-Value");

// function computeTemp(event) {
//   const currentValue = +event.target.value;

//   switch (event.target.name) {
//     case "celsius":
//       kelvinEl.value = (currentValue + 273.32).toFixed(2);
//       fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
//       break;
//     case "fahrenheit":
//       celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
//       kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
//       break;
//     case "kelvin":
//       celsiusEl.value = (currentValue - 273.32).toFixed(2);
//       fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
//       break;
//     default:
//       break;
//   }
// }
// // Add event listeners to the input fields
// celsiusEl.addEventListener("input", computeTemp);
// fahrenheitEl.addEventListener("input", computeTemp);
// kelvinEl.addEventListener("input", computeTemp);
