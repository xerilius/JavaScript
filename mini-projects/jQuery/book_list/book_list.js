"use strict";
// list of book links displayed below each heading
$(document).ready(function(evt) {
    $("#categories h2").click(function() {
        $(this).toggleClass("minus");
        if ($(this).attr("class") != "minus") {
            $(this).next().show();
        }
        else {
            $(this).next().hide();
        }
        // evt.preventDefault();   // cancel default action
    }); // end click#1
    $("#categories").find("a:first").focus(); // set focus on first <a>


    // all images for books links displayed to the right of list
    // run function for each <a> within #web_images, #java_images ...
    $("#web_images a, #java_images a, #net_images a, #database_images a").each(function() {
        // get current link's image
        let imageURL = $(this).attr("href");
        // preload image
        let bookImage = new Image();
        bookImage.src = imageURL;

        // image event handlers
        $(this).click(function(evt) {
            $("#image").attr("src", imageURL);

        evt.preventDefault(); // cancel default action
        }); // end click#2
    }); // end each

}); // end ready
