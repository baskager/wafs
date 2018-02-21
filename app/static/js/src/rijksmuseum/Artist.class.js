import Painting from './Painting.class.js';
export default class Artist {
    constructor(name) {
        this.name = name;
        this.paintings = [];
    }

    handleApiData(apiData) {
        console.log('success ' + this.name);
        // Loop through the API and insert articles for each painting
        for (let artObject of apiData.artObjects) {
            this.paintings.push(new Painting(
                artObject.id,
                artObject.title,
                artObject.longTitle,
                artObject.webImage.url
            ));
        }
    }
}
