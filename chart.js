
//  Ensures that the JS function runs after the HTML document has been fully loaded first
document.addEventListener("DOMContentLoaded", function() {

    // listener to check if button is clicked. Once clicked, this function runs
    document.getElementById('generateButton').addEventListener('click', function(event){

        // Preventing form submission
        event.preventDefault()

        // getting ids from the form
        var verticalMin = parseFloat(document.getElementById("multiplicandMin").value);
        var verticalMax = parseFloat(document.getElementById("multiplicandMax").value);
        var horizontalMin = parseFloat(document.getElementById("multiplierMin").value);
        var horizontalMax = parseFloat(document.getElementById("multiplierMax").value);


        if (isNaN(verticalMin) || isNaN(verticalMax) || isNaN(horizontalMin) || isNaN(horizontalMax) ) {
            alert("Please fill out all fields.");
            return;
        }
        // Check if values are within the range
        else if (verticalMin < -50 || verticalMax < -50 || horizontalMin < -50 || horizontalMax < -50 ||
            verticalMin > 50 || verticalMax > 50 || horizontalMin > 50 || horizontalMax > 50) {
            alert("Please fill out all fields with valid inputs (Between -50 and 50).");
            return;
    }




        // Creating the multiplication table
        var tableContainer = document.getElementById("tableContainer");
        tableContainer.innerHTML = ""; // old table is removed when 'generate' button is clicked

        var table = document.createElement("table");
        table.className = "table table-bordered";

        // Create table header
        var headerRow = table.insertRow();
        headerRow.insertCell().outerHTML = "<th>Multiplicand</th>";
        headerRow.insertCell().outerHTML = "<th>Multiplier</th>";
        headerRow.insertCell().outerHTML = "<th>Product</th>";

        // Generate table data
        for (var col = verticalMin; col <= verticalMax; col++) {
            for (var row = horizontalMin; row <= horizontalMax; row++) {
                var row = table.insertRow();
                row.insertCell().innerText = i; // Multiplicand
                row.insertCell().innerText = j; // Multiplier
                row.insertCell().innerText = i * j; // Product
            }
        }

        tableContainer.appendChild(table); // Append the table to the container in the html


    });

});




