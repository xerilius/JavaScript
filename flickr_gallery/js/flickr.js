"use strict";
$(document).ready(function() {
    // URL for flickr feed - id=82407828@N07 , tag=vectacorpbuilding
    const url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
    "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
	
    // get data from photo feed -for each item returen, add an <img> for the photo to the gallery  		  		
    $.getJSON(url,function(data) {
        // store HTML for the photos in variable-html
        let html = "";
        
        // (.each) processes each returned item and formats HTML for each item (with callback) 
        $.each(data.items, function(i,item) { //i=idx of current item in collection, item=item itself
            html += "<a href="+ "'" + item.media.m + "'" + "data-lightbox=vecta" + ">" 
            html += "<img src=" + item.media.m + ">" + "</a>";
        }); // end of each
       
        $("#new_building").html(html); // insert html of photos under #new_building div
        
    });  // end of getJSON 						
}); // end of ready 
