using backend.models;
using backend.data;
using Microsoft.EntityFrameworkCore;
using backend.models.dto;

namespace backend.repositories;

public interface IConcertTicketExampleRepository
{
    Task AddAsync(ConvertedTicket ticket);
}

public class ConcertTicketExampleRepository : IConcertTicketExampleRepository
{
    private readonly AppDbContext _context;

    public ConcertTicketExampleRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task AddAsync(ConvertedTicket ticket)
    {
        _context.ConvertedTickets.Add(ticket);
        await _context.SaveChangesAsync();
    }
}