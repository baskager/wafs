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
        return this.getArtistFromCollection(query).length > 0;
    }
    search(query) {
        const self = this;
        return new Promise(function(resolve, reject) {
            const api = new Api(apiConfig);
            const endpoints = api.getEndpointsForApi('rijksmuseum');
            // Set 'query' parameter on the GET request to the collection endpoint
            endpoints.collection.GET.params.q = query;

            if(self.isArtistInCollection(query) !== true) {
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
                    resolve(artistWithData);
                }).catch(function(err){
                    reject(err);
                });
            } else {
                console.log('Painter ' + query + ' already in collection, no need for the api :)');
                resolve(self.getArtistFromCollection(query)[0]);
            }
        });

        // const artist = this.isArtistInCollection(query);
        // console.log(artist);


        // Perform a GET request on the 'collection' endpoint on the 'rijksmuseum' API
        // 'Strategy' design pattern GIMME POINTS FOR THIS PLS
    }

}
