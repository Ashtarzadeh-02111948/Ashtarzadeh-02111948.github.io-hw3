
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
        var tableContainer = document.getElementById("tableContainer");


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

        // Check if min values are less than or equal to max values
        if (verticalMin > verticalMax || horizontalMin > horizontalMax) {
            alert("Minimum values should be less than or equal to maximum values.");
            return;
        }



        // old table is removed when 'generate' button is clicked
        tableContainer.innerHTML = ""; 

        var table = document.createElement("table");

        // Bootstrap class to add border lines to all cells so the table is legible and neater
        table.className = "table table-bordered";
    


        // Create the header row
        var headerRow = table.insertRow();

        // Using this top-left corner cell so everything else lines up.
        headerRow.insertCell().outerHTML = "<th> Muliplication Table</th>"; 

        for (var j = horizontalMin; j <= horizontalMax; j++) {
            headerRow.insertCell().outerHTML = "<th>" + j + "</th>"; // Add multipliers to header
        }

        // Generate table data
        for (var i = verticalMin; i <= verticalMax; i++) {
            var rowCreate = table.insertRow();
            rowCreate.insertCell().outerHTML = "<th>" + i + "</th>"; // Add multiplicand in first cell
            for (var j = horizontalMin; j <= horizontalMax; j++) {
                rowCreate.insertCell().innerText = i * j; // Calculate and insert product
            }
        }

        tableContainer.appendChild(table); // Append the table to the container in the html


    });

});




