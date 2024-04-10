document.addEventListener("DOMContentLoaded", function() {
    var volunteerButton = document.getElementById("volunteer-button");
    var volunteerForm = document.getElementById("volunteer-form");
    volunteerButton.addEventListener("click", function(event) {
        event.preventDefault();
        volunteerForm.style.display = "block";
    });
});

