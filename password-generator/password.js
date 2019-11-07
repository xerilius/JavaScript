"use strict";
$(document).ready(function() {
    // Generates random number - function
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };

    // Event Handler for click event of Get Password Button
    $("#generate").click(function() {
        $("#password").val( "" ); // clear previous entry
    
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        var nums = parseInt($("#num").val());
        var password = "";

        // validates user number input range 6-25
        if (nums >= 6 && nums <= 25 ) {
            for ( var i = 0; i < nums; i += 1) {
                //randomly select character from chars string and concatenate it to the password variable
                password += chars.charAt(getRandomNumber(chars.length));
            }; // end for-loop
            $("#password").val(password);
        } 
        else { // not valid number
            alert("Please enter a valid number between 6-25");
        };
    }); // end click()
    
    // Event Handler for click event of the Clear button
    $("#clear").click(function() {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()