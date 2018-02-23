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
            document.querySelector('#artist-section').innerHTML = 'loading...';
            // Get data from rijksmuseum
            collection.search(route).then(function(artist){
                document.querySelector('#artist-section').innerHTML = '';

                var sectionTemplate = document.querySelector('#section-template').innerHTML;
                var template = Handlebars.compile(sectionTemplate);

                var data = template({
                    artist: artist
                });
                document.querySelector('#artist-section').innerHTML += data;

            }).catch(function(err) {
                console.log(err);
            });
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
