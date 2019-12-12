"use strict";

$(document).ready(function() {
    const API_KEY = 'Your The Movie DB API key here';
    const URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + 'API_KEY'
    fetch(URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(JSON.stringify(data))
            // alternative way :
            // $.each(data, function() {
            //     $.each(this, function(key, value) {
            //         const imageURL="https://image.tmdb.org/t/p/w300"
            //         console.log(value.title)//
            //     })
            // })

            let html = "";
            $.each(data.results, function(key, value) {
                const imageURL = "https://image.tmdb.org/t/p/w300";
                
                html += "<div class='info'><h2>" + value.title + "</h2>";
                html += "<img class='poster' src=" +"'" + imageURL + value.poster_path + "'>";
                html += "<p><b>Release Date:</b> " + value.release_date + "</p>";
                html += "<p><b>Rating:</b> " + value.vote_average + "</p>";
                html += "<p><b>Overview:</b> " + value.overview + "</p></div>";
            })
            $("#movies").html(html);
        })
        .catch(error => console.error(error))
}); // end ready()