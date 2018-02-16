'use strict';

{ // Use ES6 IIFE
    const sections = {
        toggle: route => {
            console.log('Toggle in sections object fired');
            console.log(route);
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

    const routes = {
        init: () => {
            console.log('Init in routes object fired');

            window.addEventListener('hashchange', () => {
                const route = location.hash.substring(1);
                sections.toggle(route);
            });
        }
    };

    const collection = {
        searchCollection: function(query) {
            console.log('Fetching '+ query +' from Rijksmuseum');
            var request = new XMLHttpRequest();
            request.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection?key=ysKweoBD&format=json&q=' + query, true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    var data = JSON.parse(request.responseText);
                    console.log(data.artObjects);

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

    const app = {
        init: () => {
            console.log('Init in app object fired');
            routes.init();
        }
    };
    collection.searchCollection('Rembrandt');
    app.init();
}
