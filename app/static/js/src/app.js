// 'use strict';
import Collection from './rijksmuseum/Collection.class.js';

/**
* Nifty little webapp that fetches paintings from the Rijksmuseum API
*
* @author  Bas Kager
* @version 1.0
* @since   7-02-2018
*/
(function () {
    const collection = new Collection();

    const sections = {
        toggle: function(route) {
            // Get data from rijksmuseum
            collection.search(route).then(function(artist){
                console.log('artist', artist);
                document.getElementById(artist.name).innerHTML = '<h2>'+ artist.name +'</h2>';

                //Loop through the API and insert articles for each painting
                for (let painting of artist.paintings) {
                    document.getElementById(artist.name).innerHTML +='<article id="'+ painting.id +'"></article>';
                    let article = document.getElementById(painting.id);

                    article.innerHTML +='<img src="'+painting.imageUrl+'" alt="'+painting.longTitle+'"/>';
                    article.innerHTML +='<h2>'+ painting.longTitle +'</h2>';
                }
            }).catch(function(err) {
                console.log(err);
            });

            const htmlSections = document.getElementsByClassName('basic-section');
            // Loop through the sections and apply the classes for hiding if needed
            for (let sect of htmlSections) {
                if (sect.id !== route) {
                    sect.classList.add('hide');
                } else {
                    sect.classList.remove('hide');
                }
            }
        }
    };
    // Dynamic route to look up paintings by any artist
    routie('artist/:name', function(name) {
        sections.toggle(name);
    });

    // Dynamic route to look up paintings by any artist
    routie('', function() {
        sections.toggle('Rembrandt');
    });

    // APp initialiser object instance
    const app = {
        init: function() {
            console.log('initialised app');
        }
    };
    // Initialise app
    app.init();
})();
