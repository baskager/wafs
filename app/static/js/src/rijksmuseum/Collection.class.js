import apiConfig from '../../lib/js-api-connect/config.js';
import Api from '../../lib/js-api-connect/Api.class.js';
import Artist from './Artist.class.js';

export default class Collection {
    constructor(artists = []) {
        this.artists = artists;
    }

    addArtist(artist) {
        this.artists.push(artist);
    }

    getArtistFromCollection(query) {
        return this.artists.filter(artist => artist.name === query);
    }

    isArtistInCollection(query) {
        return this.getArtistFromCollection(query).length !== 0;
    }
    search(query) {
        const api = new Api(apiConfig);
        const endpoints = api.getEndpointsForApi('rijksmuseum');
        const self = this;
        // Set 'query' parameter on the GET request to the collection endpoint
        endpoints.collection.GET.params.q = query;

        if(this.isArtistInCollection(query) !== true) {
            let artist = new Artist(query);
            /*
            Take a look at this awesome strategy pattern :)
            The third parameter of the 'request' method is optional,

            You can pass along an object that MUST cointain a method called
            'handleApiData'. An exception is thrown if this method is not implemented.

            The request method returns a promise and resolves with
            the same object that was passed along. This object is now
            filled with the data from the api.

            The artist object is passed along with the request and will be filled
            with the painting objects when the promise is resolved.
            */
            api.request('rijksmuseum', endpoints.collection.GET, artist).then(function(artistWithData) {
                self.addArtist(artistWithData);
                console.log(self.artists);
                // document.getElementById(query).innerHTML = '<h2>'+ query +'</h2>';
                //
                // //Loop through the API and insert articles for each painting
                // for (let artObject of apiData.artObjects) {
                //     document.getElementById(query).innerHTML +='<article id="'+ artObject.id +'"></article>';
                //     let article = document.getElementById(artObject.id);
                //
                //     article.innerHTML +='<img src="'+artObject.webImage.url+'" alt="'+artObject.longTitle+'"/>';
                //     article.innerHTML +='<h2>'+ artObject.longTitle +'</h2>';
                // }

            }).catch(function(err){
                console.log(err);
            });
        } else {
            console.log("Rembrandt already fetched")
        }

        // const artist = this.isArtistInCollection(query);
        // console.log(artist);


        // Perform a GET request on the 'collection' endpoint on the 'rijksmuseum' API
        // 'Strategy' design pattern GIMME POINTS FOR THIS PLS
    }

}
