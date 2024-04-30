function convertToFarhenheit() {
    var celsius = parseFloat(document.getElementById('inputCelsius').value);
    var farhenheit = (celsius * 9/5) + 32;
    document.getElementById('result').innerHTML = celsius + "°C is " + farhenheit.toFixed(2) + "°F";
  }
  
  function convertToCelsius() {
    var farhenheit = parseFloat(document.getElementById('inputFarhenheit').value);
    var celsius = (farhenheit - 32) * 5/9;
    document.getElementById('result').innerHTML = farhenheit + "°F is " + celsius.toFixed(2) + "°C";
  }
  