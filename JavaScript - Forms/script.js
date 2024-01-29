
// This is how you access myForms on the HTML file 
document.forms.myForm;

// This is creating a variable called myForm for the myForm form in the HTML file
var myForm = document.forms.myForm;

// returns the element called name
myForm.name

// returns empty string until name is entered in the form
myForm.name.value

// returns the value of the selected color on the form
myForm.color.value

// Border default is blue. However, this function accesses the Style of the border and allows you to customize it
myForm.name.onfocus = function(){

    myForm.name.style.border = "4px solid pink";

}

// Removes the border when the form field is not selected
myForm.name.onblur = function(){

    myForm.name.style.border = "none";

}



