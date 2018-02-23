# Web App From scratch: Documentatie
Dit is de 'Rijksmuseum Collection Browser'. Het laat per schilder een aantal schilderijen zien. Van deze schilderijen is vervolgens de specifieke informatie op te halen door op een schilderij te klikken.

## Overzicht pagina
![preview image](http://www.kager.io/uploads/wafs-1.png)
## Detail pagina
![preview image](http://www.kager.io/uploads/wafs-2.png)

## Requirements
De nieuwste snufjes van Ecmascript 5 en Ecmascript 6 worden gebruikt. Zorg er in ieder geval voor dat de EcmaScript 6 Modules in je browser aan staan.

## Dependencies
- [Routie](http://projects.jga.me/routie/)
- [Handlebars](https://handlebarsjs.com)

## Noteworthy features
- Eigen microlibrary geschreven voor API functionaliteiten (js-api-connect).

- Strategy pattern in de API library. In de request methode is een optionele derde parameter mee te geven. Dit parameter moet een object zijn die de methode 'handleApiData' implementeert.

- Factory pattern. De ArtistFactory maakt Artist objecten aan vanuit de API of vanuit de lokale collectie.

## Class diagram
![preview image](http://www.kager.io/uploads/wafs-class-diagram.png)

## Flow diagram
![preview image](http://www.kager.io/uploads/wafs-flow-diagram.png)
