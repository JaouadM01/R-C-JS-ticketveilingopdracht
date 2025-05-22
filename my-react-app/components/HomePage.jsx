import "./css/HomePage.css"

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>🎟️ Welkom bij het Ticket Veilingen Platform</h1>
      <p>
        In dit project heb ik een API ontworpen met als doel externe bedrijven de mogelijkheid te geven om snel
        en eenvoudig hun resterende tickets te verkopen via ons platform. Wat dit project bijzonder maakt is
        dat het meerdere soorten tickets ondersteunt — van concerten tot dierentuinen tot conferenties — zonder
        complexe backendstructuren of front-end inconsistente weergaven.
      </p>

      <h2>🧠 Waarom een generiek API-model?</h2>
      <p>
        Initieel liep ik tegen het probleem aan dat elk tickettype (zoals concert, film, museum, dierentuin...) unieke
        eigenschappen heeft. Een concertticket bevat bijvoorbeeld een zitplaats en tijd, terwijl een pretparkticket
        enkel een geldigheidsperiode heeft. Als elk type een eigen API endpoint of model zou vereisen, dan zou het
        project niet schaalbaar zijn — niet voor de backend en niet voor de presentatie in de frontend.
      </p>

      <h2>🛠️ Mijn oplossing</h2>
      <p>
        Ik heb besloten om alle tickets op een abstracte, uniforme manier te verwerken: een ticket bestaat uit
        twee onderdelen:
      </p>
      <ul>
        <li><strong>type:</strong> het type van het ticket (zoals "Concert", "Zoo", etc.)</li>
        <li><strong>data:</strong> een JSON-object met de specifieke informatie</li>
      </ul>
      <p>
        Dit maakt het verwerken in de backend eenvoudig (één tabel, één model), én het toont tickets in de frontend
        op een consistente manier. Door elk object als JSON te bewaren, blijft de backend flexibel en uitbreidbaar.
      </p>

      <h2>🎨 Ticket Builder</h2>
      <p>
        Om bedrijven te helpen met de juiste input, heb ik een <strong>Ticket Builder</strong> gemaakt waarin je handmatig
        verschillende soorten tickets kunt samenstellen. Deze laat dynamisch andere inputvelden zien afhankelijk
        van het geselecteerde type, en genereert uiteindelijk een object zoals onze API verwacht. Het resultaat:
      </p>
      <pre>
        &#123;
          "type": "Concert",
          "data": &#123;
            "event": "The Beatles",
            "seat": "B23",
            "venue": "Ziggo Dome",
            "date": "2025-05-23"
          &#125;
        &#125;
      </pre>

      <h2>🤝 Verwachtingen voor bedrijven</h2>
      <p>
        Bedrijven worden gevraagd om hun ticketobjecten eerst om te zetten naar dit generieke formaat. Voor hen
        betekent dit minimale inspanning en maximale compatibiliteit. In deel 2 van dit artikel zal ik verder werken
        aan ondersteuning en tools aan hun kant.
      </p>

      <h2>🧩 Keuzes en vragen besproken met ChatGPT</h2>
      <ul>
        <li>Hoe om te gaan met verschillende ticketstructuren in dezelfde database?</li>
        <li>Is het verstandig om ID’s in de frontend te genereren? (Antwoord: nee, backend moet dat doen)</li>
        <li>Wat is schaalbaarder: mapping van ruwe input of vragen om gestandaardiseerde input? (Antwoord: gestandaardiseerde input)</li>
        <li>Hoe vertaal je enum waardes zoals "0" en "1" naar leesbare labels zoals "🎡 Pretpark"?</li>
      </ul>

      <p className="closing">Bedankt voor het lezen — Ik waardeer de interesse in mijn projecten</p>
    </div>
  );
};

export default HomePage;
