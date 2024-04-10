document.addEventListener("DOMContentLoaded", function() {
    var volunteerButton = document.getElementById("volunteer-button");
    var volunteerForm = document.getElementById("volunteer-form");
    
    volunteerButton.addEventListener("click", function(event) {
        event.preventDefault();
        volunteerForm.style.display = "block";
    });
        
    var charityLinks = document.querySelectorAll('.charity-link');
    charityLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'green';
        });
        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});

