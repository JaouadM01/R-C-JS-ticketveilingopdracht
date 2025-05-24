import { useState } from "react";
import "./css/IntegrationExplanationPage.css";

const IntegrationExplanationPage = () => {
    const [ticket, setTicket] = useState({
        event: "",
        date: "",
        venue: "",
        seat: "",
        price: ""
    });
    const [convertedTicket, setConvertedTicket] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5028/api/ConcertTicketExample", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(ticket)
            });
            if (!response.ok) throw new Error("Ticket kon niet worden verstuurd");
            const result = await response.json();
            setConvertedTicket(result);
        } catch (err) {
            alert("❌ Er is iets misgegaan: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="homepage-container">
            <h1>🔧 API Integratiegids voor Externe Bedrijven</h1>

            <p>
                Dit onderdeel van het project laat zien hoe externe bedrijven hun bestaande ticketobject kunnen
                omzetten naar ons uniforme formaat (<code>ConvertedTicket</code>) en deze via een eenvoudige API
                kunnen aanbieden op ons platform. Deze benadering is ontworpen om integratie zo simpel mogelijk te maken,
                zonder de noodzaak voor bedrijven om hun hele ticketstructuur te herschrijven.
            </p>

            <h2>📄 Het probleem</h2>
            <p>
                Elk bedrijf heeft zijn eigen ticketmodel — een concertbedrijf gebruikt bijvoorbeeld een object met
                <code>event</code>, <code>venue</code>, <code>seat</code> en <code>price</code>, terwijl een transportbedrijf
                compleet andere velden gebruikt. Deze structuurverschillen maken directe integratie lastig en foutgevoelig.
            </p>

            <h2>✅ De oplossing</h2>
            <p>
                ChatGPT en ik hebben besproken hoe we dit het beste konden aanpakken. De gekozen strategie:
                elk bedrijf maakt (of wij maken het voor hen) een kleine API op hun eigen server die hun interne
                ticketobject omzet naar een <code>ConvertedTicket</code>:
            </p>

            <pre>
                &#123;
                "type": "Concert",
                "jsonData": "\"event\":\"Coldplay\",\"date\":\"2025-07-15\",\"venue\":\"Ziggo Dome\",\"seat\":\"B12\",\"price\":99.5"
                &#125;
            </pre>

            <p>
                Dit object wordt vervolgens naar onze centrale API gestuurd en in de database opgeslagen — klaar om
                getoond te worden op de marktplaats.
            </p>

            <h2>🎯 Waarom het bedrijf dit zelf moet maken (of laten maken)</h2>
            <ul>
                <li>Elk bedrijf kent zijn eigen datamodel en database het beste</li>
                <li>Conversie is eenvoudig: slechts een klein object formatteren en serialiseren</li>
                <li>Wij kunnen bijspringen en dit stukje backend voor hen implementeren indien nodig</li>
                <li>Het verhoogt compatibiliteit én versnelt integratie aanzienlijk</li>
            </ul>

            <h2>🧠 Designkeuzes & Gesprekken met ChatGPT</h2>
            <ul>
                <li>Probleem: hoe verschillen in ticketstructuur aanpakken zonder tientallen modellen? → Oplossing: alles uniformiseren via type + json</li>
                <li>Vraag: kunnen we Dictionary"string, object" in EF Core opslaan? → Nee → Oplossing: serialiseren als string (JsonData)</li>
                <li>Vraag: hoe toon ik tickettypes als strings, niet als 0,1,2? → Enum mapping en string conversie toegepast</li>
            </ul>

            <h2>🎫 Probeer het zelf: Concertticket Conversie</h2>
            <form className="form-box" onSubmit={handleSubmit}>
                <h3>🎫 Test een ConcertTicketExample</h3>
                <div className="form-row">
                    <input name="event" placeholder="Event naam" value={ticket.event} onChange={handleChange} required />
                    <input name="date" type="date" value={ticket.date} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <input name="venue" placeholder="Locatie" value={ticket.venue} onChange={handleChange} required />
                    <input name="seat" placeholder="Zitplaats" value={ticket.seat} onChange={handleChange} required />
                </div>
                <div className="form-row">
                    <input name="price" type="number" step="0.01" placeholder="Prijs (€)" value={ticket.price} onChange={handleChange} required />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Versturen..." : "Verstuur naar API"}
                </button>
            </form>

            {convertedTicket && (
                <div className="converted-box">
                    <h3>✅ Geconverteerd Ticket</h3>
                    <pre>{JSON.stringify(convertedTicket, null, 2)}</pre>
                </div>
            )}

            <p className="closing">
                Deze benadering zorgt voor schaalbaarheid, eenvoud en een snelle onboarding van partners. Bedankt voor je interesse!
            </p>
        </div>
    );
};


export default IntegrationExplanationPage;
