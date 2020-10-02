"use strict";

// ready event handler for click event method of <a>
$(document).ready(function(evt) {
    $("#jdom a").click(function() {
        // begin with toggleClass method to add or remove $(".hide") from the div
        $(this).toggleClass("hide");
        if ( $(this).attr("class") != "hide" ) {
            $(this).prev().show();
            $("#jdom a").html("Show Less");
        }
        else {
            $(this).prev().hide();
            $("#jdom a").html("Show more");
        }
    });
});
