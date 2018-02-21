# Web app from scratch - assignments

## Notice
CSS to the rescue had wat meer tijd dan verwacht dus ik ben wat vertraagd met dit vak

## Live demo
### Update: Ik heb liever geen API keys in mijn repo, wafs is verplaatst naar mijn eigen server :)
<http://www.kager.io/wafs/app/>

## GitHub repository opzetten voor het vak

Dit is gelukt, je kijkt er naar :)

## Voor- en nadelen jQuery onderzoeken (libraries/frameworks in het algemeen)

### Voordelen

- Vaak werkt er meer dan een iemand aan een framework. Door teamwork heeft een 'hivemind' van vaak geniale mensen samengewerkt om een universele oplossing voor problemen te vinden.

- Het gebruik van een framework zorgt er voor dat er minder (basis) code geschreven hoeft te worden. Dit is voordelig ten opzichte van ontwikkeltijd in een project.

- Een framework kan geforked worden waardoor je eigen implementaties en toevoegingen kan verwerken.

### Nadelen

- Frameworks verouderen snel. Een functie die je in je codebase veel gebruikt kan deprecated raken. Dit moet dan weer omgebouwd worden.

- Niet elk framework wordt veel of goed up-to-date gehouden. Je hoort vaak over exploits in bijv. Wordpress.

- Een exploit in een framework betekend dat hackers op grote schaal misbruik kunnen maken. Mensen weten sneller van problemen in je codebase en kunnen daar misbruik van maken.

- Een functie die essentieel is voor de werking van je applicatie kan in een update een bug bevatten waardoor je applicatie onbruikbaar wordt. Om dit te fixen dient men weer een issues en/of pull request aan te maken.

## Voor- en nadelen single page web app onderzoeken

### Voordelen

- Alle informatie is in een keer op te halen en te gebruiken.

- Het kost vaak minder ontwikkeltijd om een single-page web app te bouwen. Er hoeft maar een pagina gestyled te worden.

- Het scrollen is voor veel gebruikers "natuurlijk", vooral op een smartphone.

- Animaties zijn makkelijker te implementeren en kunnen gebind worden aan de scroll-activiteit.

- Performance en laadtijden zijn beter voor de gebruiker, de gebruiker hoeft niet meerdere requests te doen om de informatie uit de site te krijgen.

### Nadelen

- In het geval dat een web app veel acties en/of informatie bevat, denk aan bijv. een museum. Als deze een online ticket systeem heeft, een interactieve tour, allerlij vormen van informatie zoals openingstijden en informatie over de collectie. Dan wordt het heel onoverzichtelijk en moet data 'verstopt' worden op plekken die voor de gebruiker niet intuitief zijn.

- Het is moeilijker om met de browser history (back and forth button) en SEO te werken. De browser en zoekmachines verwachten dat data op aparte pagina's staan. Dit moet je bij een Single Page web app dus nabootsen en dat kost extra tijd en moeite.

- Performance bij grote single page web apps verlaagt aanzienlijk. De resources van de hele website worden op een enkele pagina ingeladen.

## Bestaande code ombouwen naar een object structuur (Minmaal Object Literal Pattern & IIFE)

Te vinden in:  [/cmd-geo-script/script.js](https://github.com/baskager/wafs/blob/master/cmd-geo-script/script.js)

## Basis structuur voor single page web app opzetten

Te vinden in:  [/app/](https://github.com/baskager/wafs/tree/master/app)

## Code review
#### Pull requests
**Stef: ** <https://github.com/vandijkstef/wafs/pull/1>

**Vincent: ** <https://github.com/VincentKempers/wafs/pull/6>
