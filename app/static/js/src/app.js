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
            collection.search(route);

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

    // APp initialiser object instance
    const app = {
        init: function() {

            document.addEventListener('DOMContentLoaded', function() {
                sections.toggle('Rembrandt');
                setTimeout(function(){ sections.toggle('Rembrandt'); }, 5000);
            });


        }
    };
    // Initialise app
    app.init();
})();
