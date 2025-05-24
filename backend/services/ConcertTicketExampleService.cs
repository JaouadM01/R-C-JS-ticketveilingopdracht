using backend.models;
using backend.repositories;
using backend.models.dto;
using System.Text.Json;


namespace backend.services;


public interface IConcertTicketExampleService
{
    Task<ConvertedTicket> AddTicketAsync(ConcertTicketExample concertTicketExample);
}

public class ConcertTicketExampleService : IConcertTicketExampleService
{
    private readonly IConcertTicketExampleRepository _repository;

    public ConcertTicketExampleService(IConcertTicketExampleRepository repository)
    {
        _repository = repository;
    }
    public async Task<ConvertedTicket> AddTicketAsync(ConcertTicketExample concertTicketExample)
    {
        var data = new Dictionary<string, object>
    {
        {"event", concertTicketExample.Event},
        {"date", concertTicketExample.Date.ToString("yyyy-MM-dd")},
        {"venue", concertTicketExample.Venue},
        {"seat", concertTicketExample.Seat},
        {"price", concertTicketExample.Price},
    };

        var ticket = new ConvertedTicket
        {
            Type = "Concert",
            JsonData = JsonSerializer.Serialize(data)
        };

        await _repository.AddAsync(ticket);
        return ticket;
    }

}
