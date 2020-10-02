
"use strict";

$(document).ready(function() {
    $("#search").click( function() {
        let artistName = $("#artist").val().trim();
        let encodedArtistName = encodeURIComponent(artistName);
        
        const API_KEY = 'Your API KEY here'
        const URL = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' 
        + '"' +encodedArtistName + '"' 
        + '&api_key=' +"'" + API_KEY + '"'+'&format=json';
    
        fetch(URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let html = "";
                $.each(data, function() {
                    $.each(this, function() {
                        $.each(this, function(i, item) {

                            // console.log(item.image[1]['#text']) --- is an empty string

                            html += "<img src='" + item.image[1]['#text'] + "'>";
                            html += "<p><b>Artist:</b> " + item.artist['name'] + "</p>";
                            html += "<p><b>Album:</b> " + item.name + "</p>";
                            html += "<b>URL: </b>" + "<a href='" + item.url +"'> Website</a>" + "<br>";
                        });

                        $("#music").html(html);
                    }); 
                }); 
            }) // end function(data)

            .catch(error => console.error(error))
    }); //end click();
}); // end ready();
