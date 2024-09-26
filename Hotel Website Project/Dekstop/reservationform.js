function submitValue(){
    //https://www.codingem.com/javascript-pass-variable-from-html-page-to-another/
    // Get the value entered by the user

    console.log("halo")

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const dateIn = document.getElementById('check-in').value
    const dateOut = document.getElementById('check-out').value 
    const room = document.getElementById('room').value
    const not = document.getElementById('not').value

    
    if(username.length < 5) {
        alert('Name should contain at least 5 words')
        return false
    }
    if(!email.endsWith("@gmail.com")){
        alert("email format is wrong. after you put your email, please put an @ sign and ends with either 2 of these(gmail.com or yahoo.com)")
        return false
    }
    if(dateIn == 0) {
        alert("fill in the check in date")
        return false
    }
    if(dateOut == 0) {
        alert("fill in the check out date")
        return false
    }
    if(dateOut < dateIn) {
        alert("Check in should be earlier than Check out")
        return false
    }
    if (room == not) {
        alert("Pick the room type you want")
        return false
    }
    else {
        // Store the value in localStorage
        localStorage.setItem('userValue', username)
        localStorage.setItem('emailValue', email)
        // Redirect to the second page
        window.location.href = 'confirmation.html'
    }
}


document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
});