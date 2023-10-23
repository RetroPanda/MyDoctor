document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const selectedDoctor = document.getElementById("doctor").value;
            const selectedDate = document.getElementById("date").value;
            const selectedTime = document.getElementById("time").value;

            // Here, you can implement the logic to send the booking information to the server
            // and handle the booking process. This is just a placeholder.

            alert(
                `Appointment booked!\nDoctor: ${selectedDoctor}\nDate: ${selectedDate}\nTime: ${selectedTime}`
            );

            // You can also reset the form here if needed
            bookingForm.reset();
        });
    }
});

function includeHTMLSnippet() {
    alert("Running");

    // Traverse the collection of all
    // HTML elements
    id = document.getElementsByTagName("*");
    for (i = 0; i < id.length; i++) {
        element = id[i];
 
        // Search for elements with
        // specific attributes
        file = element.getAttribute(
            "mydr-include-html-snippet");
 
        if (file) {
 
            // Create an HTTP request with
            // the attribute value as the
            // file name
            xmlRequest = new XMLHttpRequest();
            xmlRequest.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
 
                    if (this.status == 404) {
                        element.innerHTML = "Page not found.";
                    }
 
                    // Delete the attribute and
                    // call this function again.
                    element.removeAttribute(
                        "mydr-include-html-snippet");
 
                    includeHTMLSnippet();
                }
            }
            xmlRequest.open("GET", file, true);
            xmlRequest.send();
            return; // Exit function.
        }
    }
};
