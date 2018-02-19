// 'use strict';
import apiConfig from './api/config.js';
import Api from './api/api.class.js';

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
            const api = new Api(apiConfig);
            const endpoints = api.getEndpointsForApi('rijksmuseum');
            // Set 'query' parameter on the GET request to the collection endpoint
            endpoints.collection.GET.params.q = query;

            // Perform a GET request on the 'collection' endpoint on the 'rijksmuseum' API
            api.request('rijksmuseum', endpoints.collection.GET).then(function(apiData) {
                console.log(apiData.artObjects);

                document.getElementById(query).innerHTML = '<h2>'+ query +'</h2>';

                // Loop through the API and insert articles for each painting
                for (let artObject of apiData.artObjects) {
                    document.getElementById(query).innerHTML +='<article id="'+ artObject.title +'"></article>';
                    let article = document.getElementById(artObject.title);

                    article.innerHTML +='<img src="'+artObject.webImage.url+'" alt="'+artObject.longTitle+'"/>';
                    article.innerHTML +='<h2>'+ artObject.longTitle +'</h2>';
                }

            }).catch(function(err){
                console.log(err);
            });
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
