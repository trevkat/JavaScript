// Checks to see if form is empty or filled out

var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function() {

if(myForm.name.value == ""){
    message.innerHTML = "Please enter a name!";
    // Return here prevents the form from being submitted to the server
    return false;
} else{
    message.innerHTML = "";
    // Return here allows the form to be submitted
    return true;
}
};