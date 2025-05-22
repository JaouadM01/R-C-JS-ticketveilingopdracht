import React, { useState } from 'react';
import "./css/TicketForm.css"

const ticketTypes = [
    { label: 'Concert', value: 'Concert' },
    { label: 'Zoo', value: 'Zoo' },
    { label: 'AmusementPark', value: 'AmusementPark' },
    // voeg hier meer toe...
];

const fieldConfig = {
    Concert: [
        { name: 'event', placeholder: 'Event Name' },
        { name: 'date', placeholder: 'Date (YYYY-MM-DD)' },
        { name: 'venue', placeholder: 'Venue' },
        { name: 'seat', placeholder: 'Seat Number' },
        { name: 'price', placeholder: 'Price' }
    ],
    Zoo: [
        { name: 'zooName', placeholder: 'Zoo Name' },
        { name: 'entryDate', placeholder: 'Entry Date (YYYY-MM-DD)' },
        { name: 'visitorName', placeholder: 'Visitor Name' },
        { name: 'ticketNumber', placeholder: 'Ticket Number' },
        { name: 'includesSafari', placeholder: 'Includes Safari (true/false)' }
    ],
    AmusementPark: [
        { name: 'parkName', placeholder: 'Park Name' },
        { name: 'validFrom', placeholder: 'Valid From' },
        { name: 'validTo', placeholder: 'Valid To' },
        { name: 'accessType', placeholder: 'Access Type' }
    ]
};

const TicketBuilderForm = () => {
    const [ticketType, setTicketType] = useState('Concert');
    const [formData, setFormData] = useState({});
    const [outputJson, setOutputJson] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleTypeChange = (e) => {
        setTicketType(e.target.value);
        setFormData({});
        setOutputJson(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            type: ticketType,
            data: formData
        };

        setOutputJson(payload);
    };

    return (
        <div className="ticket-form-container">
            <h2>Ticket Invulformulier</h2>
            <form onSubmit={handleSubmit}>
                <label>Ticket Type:</label>
                <select value={ticketType} onChange={handleTypeChange}>
                    {ticketTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                </select>

                {fieldConfig[ticketType].map((field) => (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.placeholder}</label>
                        <input
                            type="text"
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            value={formData[field.name] || ''}
                        />
                    </div>
                ))}

                <button type="submit">Genereer Ticket Payload</button>
            </form>

            {outputJson && (
                <div className="ticket-form-output">
                    <h3>🎟️ TicketInputDto JSON</h3>
                    <pre>{JSON.stringify(outputJson, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TicketBuilderForm;
