'use strict';

{ // Use ES6 IIFE

    const sections = {
        toggle: function(route) {
            // Get data from rijksmuseum
            collection.searchCollection(route);

            const sections = document.getElementsByClassName('basic-section');
            for (let i = 0; i < sections.length; i++) {
                const sect = sections[i];
                if (sect.id !== route) {
                    sect.classList.add('hide');
                } else {
                    sect.classList.remove('hide');
                }
            }
        }
    };

    const collection = {
        searchCollection: function(query) {
            console.log('Fetching '+ query +' from Rijksmuseum');
            var request = new XMLHttpRequest();
            request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection?key=ysKweoBD&format=json&imgonly=true&q=' + query, true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // Success!

                    var data = JSON.parse(request.responseText);
                    console.log(data.artObjects);

                    document.getElementById(query).innerHTML = '<h2>'+ query +'</h2>';

                    for (let artObject of data.artObjects) {
                        document.getElementById(query).innerHTML +='<article id="'+ artObject.title +'"></article>';
                        let article = document.getElementById(artObject.title);

                        article.innerHTML +='<img src="'+artObject.webImage.url+'" alt="'+artObject.longTitle+'"/>';
                        article.innerHTML +='<h2>'+ artObject.longTitle +'</h2>';
                    }
                } else {
                // We reached our target server, but it returned an error
                    console.log('something went wrong...');
                }
            };

            request.onerror = function() {
             // There was a connection error of some sort
            };

            request.send();
        }
    };

    routie('Rembrandt', function() {
        sections.toggle('Rembrandt');
    });

    routie('Vermeer', function() {
        console.log("hoi pipeloi")
        sections.toggle('Vermeer');
    });

    const app = {
        init: () => {
            document.addEventListener('DOMContentLoaded', function() {
                sections.toggle('Rembrandt');
            });
        }
    };

    app.init();
}
