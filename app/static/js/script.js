'use strict';

(function () {

    const sections = {
        toggle: function(route) {
            // Get data from rijksmuseum
            collection.searchCollection(route);

            const sections = document.getElementsByClassName('basic-section');

            // Loop through the sections and apply the classes for hiding if needed
            for (let sect of sections) {
                if (sect.id !== route) {
                    sect.classList.add('hide');
                } else {
                    sect.classList.remove('hide');
                }
            }
        }
    };
    // Rijksmuseum collection functionalities
    const collection = {
        searchCollection: function(query) {
            console.log('Fetching '+ query +' from Rijksmuseum');
            var request = new XMLHttpRequest();
            // Search the rijksmuseum collection with the supplied parameters
            request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection?key=ysKweoBD&format=json&imgonly=true&q=' + query, true);

            request.onload = function() {
                // 200 = success
                if (request.status === 200 ) {

                    var data = JSON.parse(request.responseText);

                    console.log(data.artObjects);

                    document.getElementById(query).innerHTML = '<h2>'+ query +'</h2>';

                    // Loop through the API and insert articles for each painting
                    for (let artObject of data.artObjects) {
                        document.getElementById(query).innerHTML +='<article id="'+ artObject.title +'"></article>';
                        let article = document.getElementById(artObject.title);

                        article.innerHTML +='<img src="'+artObject.webImage.url+'" alt="'+artObject.longTitle+'"/>';
                        article.innerHTML +='<h2>'+ artObject.longTitle +'</h2>';
                    }
                } else {
                // We reached our target server, but it returned an error
                    console.log('Server returned an error');
                    document.getElementById(query).innerHTML = '<h2>Verbinding met rijksmuseum is kaapuuttssjj</h2>';
                }
            };

            request.onerror = function() {
                // There was a connection error of some sort
                console.log('Could not connect to Rijksmuseum API');
                document.getElementById(query).innerHTML = '<h2>Verbinding met rijksmuseum is kaapuuttssjj</h2>';
            };

            request.send();
        }
    };
    // Route for paintings by Rembrandt
    routie('Rembrandt', function() {
        sections.toggle('Rembrandt');
    });
    // Route for paintings by Vermeer
    routie('Vermeer', function() {
        sections.toggle('Vermeer');
    });

    // APp initialiser object instance
    const app = {
        init: function() {
            document.addEventListener('DOMContentLoaded', function() {
                sections.toggle('Rembrandt');
            });
        }
    };
    // Initialise app
    app.init();
})();
