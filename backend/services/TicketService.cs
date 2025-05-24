using backend.models;
using backend.repositories;
using backend.models.dto;
using System.Text.Json;


namespace backend.services;


public interface ITicketService
{
    Task<IEnumerable<Ticket>> GetAllTicketsAsync();
    Task<Ticket?> GetTicketByIdAsync(int id);
    Task AddTicketAsync(TicketInputDto ticket);
}

public class TicketService : ITicketService
{
    private readonly ITicketRepository _repository;

    public TicketService(ITicketRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Ticket>> GetAllTicketsAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Ticket?> GetTicketByIdAsync(int id)
    {
        return await _repository.GetByIdAsync(id);
    }

    public async Task AddTicketAsync(TicketInputDto ticketdto)
    {
        if (!Enum.TryParse<TicketType>(ticketdto.Type, ignoreCase: true, out var parsedType))
            throw new ArgumentException("Ongeldig tickettype. Gebruik bijv. 'Concert', 'AmusementPark', 'Movie', 'Museum', 'Theater', 'SportsEvent', 'Festival', 'Workshop', 'Exhibition', 'Transport', 'Zoo', 'Aquarium', 'Conference'.");

        var ticket = new Ticket
        {
            Type = parsedType,
            Data = ticketdto.JsonData
        };

        await _repository.AddAsync(ticket);
    }
}
