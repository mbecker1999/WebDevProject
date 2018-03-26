function showDescription(descript) {
    $("#description").html("Description: " + descript);
}

function hideDescription() {
    $("#description").html("");
}

function validate() {
    var txtDob= $("#txtDate").val();
    var dob = new Date(txtDob);
      if (dob >= new Date()) {
        alert("Date of birth is not valid. Date has to be before today.");
        return false;
    } 
    var phoneNumber = $("#phone").val();
    var phoneNumberLength = phoneNumber.length;
      if ((phoneNumberLength == 10) == false) {
        alert("Phone Number Must Be 10 digits");
        return false;
      }
      if ((isNaN(phoneNumber) == true)) {
        alert ("Phone Number must be an acutal number");
        return false;
      }
}