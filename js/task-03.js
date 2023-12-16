document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('name-input');
    var nameOutput = document.getElementById('name-output');
  
    nameInput.addEventListener('input', function() {

      var inputValue = nameInput.value.trim();
  
      if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = inputValue;
      }
    });
  });
