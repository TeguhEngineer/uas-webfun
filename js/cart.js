// Teguh Afriansyah 202302035
function increment1() {
    var input = document.getElementById('number');
    var value = parseInt(input.value);
    if (value < input.max) {
      input.value = value + 1;
    }
  }
  
  function decrement1() {
    var input = document.getElementById('number');
    var value = parseInt(input.value);
    if (value > input.min) {
      input.value = value - 1;
    }
  }
function increment2() {
    var input = document.getElementById('nomor');
    var value = parseInt(input.value);
    if (value < input.max) {
      input.value = value + 1;
    }
  }
  
  function decrement2() {
    var input = document.getElementById('nomor');
    var value = parseInt(input.value);
    if (value > input.min) {
      input.value = value - 1;
    }
  }
function increment3() {
    var input = document.getElementById('angka');
    var value = parseInt(input.value);
    if (value < input.max) {
      input.value = value + 1;
    }
  }
  
  function decrement3() {
    var input = document.getElementById('angka');
    var value = parseInt(input.value);
    if (value > input.min) {
      input.value = value - 1;
    }
  }