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

    const page = {
        artistOverview: function(artistName) {
            document.querySelector('#artist-section').innerHTML = 'loading paintings by '+ artistName +'...';
            // Get data from rijksmuseum
            collection.search(artistName).then(function(artist){
                document.querySelector('#artist-section').innerHTML = '';

                let sectionTemplate = document.querySelector('#artist-overview').innerHTML;
                let template = Handlebars.compile(sectionTemplate);

                let data = template({
                    artist: artist
                });
                document.querySelector('#artist-section').innerHTML += data;

            }).catch(function(err) {
                console.log(err);
            });
        },
        paintingDetail: function(artistName, id) {
            document.querySelector('#artist-section').innerHTML = 'loading painting detail page...';
            // Get data from rijksmuseum
            collection.search(artistName).then(function(artist){
                document.querySelector('#artist-section').innerHTML = '';

                let sectionTemplate = document.querySelector('#painting-detail').innerHTML;
                let template = Handlebars.compile(sectionTemplate);

                let painting = artist.getPaintingById(id)[0];
                console.log(painting);

                var data = template({
                    artist: artist,
                    painting: painting
                });
                document.querySelector('#artist-section').innerHTML += data;

            }).catch(function(err) {
                console.log(err);
            });
        }
    };
    // Dynamic route to look up paintings by any artist
    routie('artist/:name', function(artistName) {
        page.artistOverview(artistName);
    });

    routie('artist/:name/painting/:id', function(artistName, paintingId) {
        page.paintingDetail(artistName, paintingId);
    });

    // Dynamic route to look up paintings by any artist
    routie('', function() {
        page.artistOverview('Rembrandt');
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
