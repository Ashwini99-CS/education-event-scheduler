
		function checkLogin() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			if (username == "" || password == "") {
				alert("Please fill in all fields.");
			} else if (username == "uname" && password == "psw") {
				alert("Login successful.");
				window.location.href="home.html"
				// redirect to homepage or other page
			} else {
				alert("Invalid username or password.");
			}
		}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}