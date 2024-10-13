document.getElementId('tableInput').addEventListener('submit', function(event){

    // getting ids from the form
    var verticalMin = document.getElementById("multiplicandMin").value;
    var verticalMax = document.getElementById("multiplicandMin").value;
    var horizontalMin = document.getElementById("multiplierMin").value;
    var horizontalMax = document.getElementById("multiplierMax").value;


    if (multiplicandMin === '' || multiplicandMin === '' || multiplierMin === ''||multiplierMax === '' ) {
        alert("Please fill out all fields.");
        return;
    }
    else if (multiplicandMin <=0 || multiplicandMin <=0 || multiplierMin<=0 || multiplierMax <=0){
        alert("Please fill out all fields with valid inputs (greater than 0).");
        return;
    }





});




