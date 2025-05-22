import React, { useEffect, useState } from "react";
import "./css/TicketMarket.css";
import { useNavigate } from "react-router-dom";

export default function TicketMarket() {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const getTickets = async () => {
            try {
                const response = await fetch(`http://localhost:5028/api/Tickets`);
                if (response.ok) {
                    const data = await response.json();
                    setTickets(data);
                } else {
                    alert(`Something went wrong fetching tickets`);
                }
            } catch (error) {
                console.error(`Error fetching Tickets: `, error);
            }
        };

        getTickets();
    }, []);


    const ticketTypeLabels = {
        0: "🎵 Concert",
        1: "🎡 Pretpark",
        2: "🎬 Film",
        3: "🏛️ Museum",
        4: "🎭 Theater",
        5: "🏟️ Sportevenement",
        6: "🎉 Festival",
        7: "🛠️ Workshop",
        8: "🖼️ Expositie",
        9: "🚍 Vervoer",
        10: "🦁 Dierentuin",
        11: "🐠 Aquarium",
        12: "📢 Conferentie"
    };

    return (
        <div className="ticket-market-container">
            <h2>🎫 Ticket Marketplace</h2>
            <div className="ticket-grid">
                {tickets.map((ticket) => {
                    const ticketData = JSON.parse(ticket.data); // string -> object

                    return (
                        <div className="ticket-card" key={ticket.id} 
                        onClick={() => navigate('/')}>
                            <h3>{ticketTypeLabels[ticket.type] || ticket.type}</h3>
                            <ul>
                                {Object.entries(ticketData).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {String(value)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
