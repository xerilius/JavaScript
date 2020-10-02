"use strict";
$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");

	});

	// set up event handlers for links
	$("#image_list a").click(function(evt) {
		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");
		// callback function that fades out img and caption
		$("#image").attr("src", imageURL).fadeOut(1000,
            function() {
                $(this).fadeIn(1000);
            }
        );
		$("#caption").text(caption).fadeOut(1000,
            function() { 
                $(this).fadeIn(1000); 
            }
        );
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click

	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready
