document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var emailInput = loginForm.elements['email'];
      var passwordInput = loginForm.elements['password'];

      if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert('All form fields must be filled in');
        return;
      }

      var formData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
      };

      console.log(formData);

      loginForm.reset();
    });
  });
