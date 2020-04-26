# Frontend voor Designers 1920

![alt text](./img/F4Dsplash.png "Frontend voor Design Splash")

In het vak Frontend voor Designers leer je hoe je met HTML, CSS en Javascript prototypes kunt maken om je ontwerpideeën te testen in een browser. We gaan animeren, responsive layouts uitproberen en interactie coderen ...


Het vak bestaat uit 3 opdrachten:

Mijn versie van Netflix(Nitflex) met drag 'n drop: [Opdracht 1: Een Micro-interactie uitwerken en testen](opdracht1/)

Een portfolio met naar binnen slidende elementen(niet goed gelukt): [Opdracht 2: Een interactie uitwerken voor verschillende gebruikers input](opdracht2/)

Nitflex, maar dan met sliders, layouts en Json: [Opdracht 3: Een interactie uitwerken met externe data](opdracht3/)

Toelichting eindopdracht

Voor de eindopdracht van frontend voor designers heb ik mijn best gedaan om mijn eigen Netflix op te zetten, genaamd Nitflex. Tijdens de opdracht heb ik de json file van Koop Reynders gebruikt.

Wanneer de gebruiker Nitflex opent komt hij eerst terecht op een loading state. Hier staat een laadsymbool en ontvangt hij een geruststellend bericht dat Nitflex 'op zoek is naar de beste films voor de gebruiker'. Zo weet de gebruiker waarop hij aan het wachten is.

Zodra de gebruiker dan op het homescherm is aangekomen van Nitflex kan het feest beginnen. Hier vallen de afbeeldingen van de films als eerste op, want dat is waar het om gaat. Vervolgens kan hij het overzicht van de films in een slider of grid weer laten geven. De keus is hier aan hem. Zo heeft de gebruiker controle over wat hij fijn vind om mee te werken.

De gebruiker kan vervolgens navigeren door het aanbod aan films. Dit kan via de 'shift' knop op het toetsenbord, wat ook vermeld staat boven het overzicht, maar dit kan ook worden gedaan door middel van scrollen. Wanneer de gebruiker via de 'shift' knop navigeert wordt de geselecteerde film gehighlight door middel van een witte balk bovenaan de cover. Zo weet de gebruiker welke film actief is en heeft hij de controle over welke film hij wilt zien. De mogelijkheid tot scrollen wordt weergegeven door de film rechts in het carousel die niet helemaal meer in beeld is. Dit suggereert dat er meer films aanwezig zijn.

Als de gebruiker dan uiteindelijk een film heeft gevonden die hij leuk vind kan hij hier naartoe navigeren en erop klikken. Voordat hij klikt vergroot de cover van de film, om de gebruiker te laten weten dat de afbeelding een button is en er dus iets achter de cover zit wanneer hij erop klikt. Daarnaast staat het onder de films vermeld dat de covers klikbaar zijn. De gebruiker weet nu wat hij kan verwachten zodra hij op een film drukt. Wanneer de gebruiker klikt op de film komt er een dialoog in beeld onder de desbetreffende film, waarin meer informatie staat over de gekozen film. Op basis van deze info kan de gebruiker zijn beslissing maken.

Toelichting code

Ik heb Nitflex gebasseerd op de json file van Koop Reynders. Met deze json heb ik afbeeldingen en informatie van verschillende films kunnen ophalen van een externe bron en vormgegeven in HTML/CSS en javascript.

In mijn HTML file heb ik heel weinig staan, omdat ik bijna alle elementen aanmaak in het javascript bestand. De enige elementen die hier staan hebben betrekking op dingen die niet uit de json komen.

In het javascript bestand selecteer ik tot aan regel 23 elementen en haal ik de data uit het json bestand op. Vervolgens maak ik het met de code van regel 30-54 mogelijk om met de shift key door de lijst te navigeren.

Op regel 57-66 zorg ik ervoor dat het laadscherm in beeld komt en weer verdwijnt.

In regel 69-110 maak ik alle elementen aan op de HTML pagina. Deze elementen vul ik vervolgens met de data uit het json bestand.

Regel 114-118 zorgen ervoor dat de details van een film onder de afbeeldingen verschijnen.

Tot slot zorg ik er in regel 121-135 voor dat de layout van de films kan worden geswitcht tussen grid en slider. De comments verder in het bestand waren verschillende pogingen tot functies.

Verdere toelichting staan in de code zelf in comments erbij geschreven.

Toelichting testen, verbeteren

Tijdens het werken aan deze opdracht zijn er verschillende momenten geweest waarop ik vast ben gelopen en hulp nodig had. Deze momenten zal ik hier toelichten.

Om de carousel werkend te krijgen heb ik veel verschillende manieren gezocht om deze aan de praat te krijgen. Ik heb hier gezocht naar if else statements, maar ook naar hele eenvoudige functies met classlist.add. Uiteindelijk heb ik hulp gehad van Nino Schelcher bij het oplossen van dit probleem. Met behulp van een array kwam de informatie onder de geselecteerde film tevoorschijn.

Ook heb ik veel tijd gestopt in het zoeken van een oplossing waarmee ik via het toetsenbord door het filmaanbod kon navigeren. Zelf is dit mij helaas niet gelukt, maar met hulp van Vincent Kempers heb ik deze ook redelijk aan de praat gekregen. Alhoewel de lijst nu kan worden gebruikt met de 'tab' knop, begint hij achteraan de lijst en gaat hij naar voren. Ik heb geprobeerd dit op te lossen, maar het is me niet gelukt.

Na mijn eerste inlevermoment had ik de opdracht niet voldoende afgerond. Op basis van de feedback die ik hieruit heb gekregen kan het carousel nu met tab worden bediend én wordt er genoemd dat dit mogelijk is, schuiven de informatie dialogen van de films nu mee met de afbeelding en is er vermeld dat het mogelijk is om films te klikken. Daarnaast heb ik de readme flink uitgebreid om te zorgen voor een betere toelichting op de opdracht.

Al met al ben ik veel tijd kwijt geweest met deze opdracht. Ik vond het lastig om Nitflex aan het werken te krijgen zoals ik had gewild, maar ik ben uiteindelijk wel tevreden met wat ik eruit heb weten te krijgen. 

---
- [Markup cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Getting started with GitHub Pages](https://guides.github.com/features/pages/)
