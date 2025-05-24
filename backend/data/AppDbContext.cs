using Microsoft.EntityFrameworkCore;
using backend.models;
using backend.models.dto;

namespace backend.data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Ticket> Tickets => Set<Ticket>();
    public DbSet<ConvertedTicket> ConvertedTickets { get; set; }
}
