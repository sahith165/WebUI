
function validateForm() {
    var count_ver = 0;
    if (!validateForm_firstname()) {

        return false
    }

    if (!validateForm_lastname()) {

        return false
    }


    if (!validateForm_email()) {

        return false
    }

    if (!validateForm_phoneNumber()) {
        return false;

    }
    if (!validateForm_street1()) {
        return false
    }

    if (!validateForm_street2()) {
        return false
    }


    if (!validateForm_check()) {

        return false
    }
    if (!validateForm_radio()) {

        return false
    }


    return true;

}


function validateForm_phoneNumber() {
    var numbers = /^[0-9]+$/;
    if (document.getElementById("TelephoneNumber").value.match(numbers)) {
        return true;
    }
    else {
        alert("invalid phone number");
        return false;
    }
}

function validateForm_firstname() {
    var r = document.getElementById("FirstName").value;
    var letters = /^[A-Za-z]+$/;
    if (r.match(letters)) {

        return true;
    }
    else {
        alert('First name can only be letters.');
        return false;
    }
}




function validateForm_lastname() {
    var r = document.getElementById("LastName").value;
    var letters = /^[A-Za-z]+$/;
    if (r.match(letters)) {

        return true;
    }
    else {
        alert('Last name can only be letters.');
        return false;
    }
}
function validateForm_street1() {
    return true;
    var ele = document.getElementById('street1').value;
    if (/[^a-zA-Z0-9]/.test(ele)) {
        alert('Street 1 can only be alphanumeric characters. ');
        return false;
    }
    if (ele == "") {
        alert('Please enter the address.');
        return false;
    }
    return true;
}
function validateForm_street2() {
    return true;
    var ele = document.getElementById('street2').value;
    if (/[^a-zA-Z0-9]/.test(ele)) {
        alert('Street 2 can only be alphanumeric characters.');
        return false;
    }

    if (ele == "") {
        alert('Please enter the address.');
        return false;
    }
    return true;
}
function validateForm_email() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    else
        return true;
}

function validateForm_check() {
    var c_count = 0;
    var r = document.getElementsByClassName("check");
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {
            c_count += 1;
        }
    }
    if (c_count < 2) {
        alert("Please select atleast 2 CheckBoxes");
        return false;
    }

    return true;
}

function validateForm_radio() {
    var r = document.getElementsByClassName("Radio");
    for (var i = 0; i < r.length; i++) {
        if (r[i].checked) {

            return true;
        }
    }
    alert("Please select a radio value");
    return false;
}

