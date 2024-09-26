window.onload = function() {
    // Get the value from localStorage
    var user = localStorage.getItem('userValue');
    var e_mail = localStorage.getItem('emailValue');
    
    // Display the value on the page
    var user_out = document.getElementById('user-output');
    user_out.innerText = user;
    var email_out = document.getElementById('email-output');
    email_out.innerText = e_mail;
}