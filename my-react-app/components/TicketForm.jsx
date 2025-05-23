import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TicketSchemas } from './Schemas/TicketFormSchema';
import "./css/TicketForm.css";

const ticketTypes = Object.keys(TicketSchemas);

const fieldConfig = {
  Concert: [
    { name: 'event', placeholder: 'Event Name' },
    { name: 'date', placeholder: 'Date (YYYY-MM-DD)' },
    { name: 'venue', placeholder: 'Venue' },
    { name: 'seat', placeholder: 'Seat Number' },
    { name: 'price', placeholder: 'Price' }
  ],
  AmusementPark: [
    { name: 'parkName', placeholder: 'Park Name' },
    { name: 'validFrom', placeholder: 'Valid From' },
    { name: 'validTo', placeholder: 'Valid To' },
    { name: 'accessType', placeholder: 'Access Type' }
  ],
  Movie: [
    { name: 'title', placeholder: 'Movie Title' },
    { name: 'startTime', placeholder: 'Start Time' },
    { name: 'hall', placeholder: 'Hall' },
    { name: 'date', placeholder: 'Date' }
  ],
  Museum: [
    { name: 'museumName', placeholder: 'Museum Name' },
    { name: 'entryDate', placeholder: 'Entry Date' },
    { name: 'ticketNumber', placeholder: 'Ticket Number' }
  ],
  Theater: [
    { name: 'play', placeholder: 'Play Name' },
    { name: 'date', placeholder: 'Date' },
    { name: 'seat', placeholder: 'Seat' },
    { name: 'hall', placeholder: 'Hall' }
  ],
  SportsEvent: [
    { name: 'match', placeholder: 'Match Info' },
    { name: 'team', placeholder: 'Team' },
    { name: 'stadium', placeholder: 'Stadium' },
    { name: 'date', placeholder: 'Date' }
  ],
  Festival: [
    { name: 'name', placeholder: 'Festival Name' },
    { name: 'startDate', placeholder: 'Start Date' },
    { name: 'endDate', placeholder: 'End Date' },
    { name: 'location', placeholder: 'Location' }
  ],
  Workshop: [
    { name: 'topic', placeholder: 'Topic' },
    { name: 'date', placeholder: 'Date' },
    { name: 'instructor', placeholder: 'Instructor' }
  ],
  Exhibition: [
    { name: 'title', placeholder: 'Exhibition Title' },
    { name: 'location', placeholder: 'Location' },
    { name: 'date', placeholder: 'Date' }
  ],
  Transport: [
    { name: 'departure', placeholder: 'Departure' },
    { name: 'destination', placeholder: 'Destination' },
    { name: 'departureTime', placeholder: 'Departure Time' },
    { name: 'seat', placeholder: 'Seat' }
  ],
  Zoo: [
    { name: 'zooName', placeholder: 'Zoo Name' },
    { name: 'entryDate', placeholder: 'Entry Date' },
    { name: 'ticketNumber', placeholder: 'Ticket Number' },
    { name: 'visitorName', placeholder: 'Visitor Name' }
  ],
  Aquarium: [
    { name: 'aquariumName', placeholder: 'Aquarium Name' },
    { name: 'entryDate', placeholder: 'Entry Date' },
    { name: 'ticketCode', placeholder: 'Ticket Code' }
  ],
  Conference: [
    { name: 'name', placeholder: 'Conference Name' },
    { name: 'speaker', placeholder: 'Speaker' },
    { name: 'date', placeholder: 'Date' },
    { name: 'location', placeholder: 'Location' }
  ]
};

const TicketBuilderForm = () => {
  const [ticketType, setTicketType] = useState('Concert');
  const [outputJson, setOutputJson] = useState(null);

  const schema = TicketSchemas[ticketType];
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { type: ticketType, data: {} },
    mode: 'onBlur' // of 'onChange' voor live validatie
  });

  const onSubmit = (data) => {
    setOutputJson(data);
  };

  const handleSubmissionTicket = async (data) => {
    try {
      const response = await fetch('http://localhost:5028/api/Tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error();
      alert("✅ Ticket submitted!");
    } catch {
      alert("❌ Ticket kon niet worden verzonden.");
    }
  };

  return (
    <div className="ticket-form-container">
      <h2>Ticket Invulformulier</h2>

      <form key={ticketType} onSubmit={handleSubmit(onSubmit)}>
        <label>Ticket Type:</label>
        <select {...register("type")} value={ticketType} onChange={e => setTicketType(e.target.value)}>
          {Object.keys(TicketSchemas).map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {fieldConfig[ticketType]?.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.placeholder}</label>
            <input
              type="text"
              id={field.name}
              placeholder={field.placeholder}
              {...register(`data.${field.name}`)}
              className={errors.data?.[field.name] ? 'input-error' : ''}
            />
            {errors.data?.[field.name] && (
              <p className="error-message">{errors.data[field.name]?.message}</p>
            )}
          </div>
        ))}

        <button type="submit">Genereer Ticket Payload</button>
      </form>

      {outputJson && (
        <div className="ticket-form-output">
          <h3>🎟️ TicketInputDto JSON</h3>
          <pre>{JSON.stringify(outputJson, null, 2)}</pre>
          <button onClick={() => handleSubmissionTicket(outputJson)}>Submit Ticket</button>
        </div>
      )}
    </div>
  );
};

export default TicketBuilderForm;

