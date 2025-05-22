using Microsoft.EntityFrameworkCore;
using backend.data;
using backend.services;
using backend.repositories;

var builder = WebApplication.CreateBuilder(args);

// SQLite + EF
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=tickets.db"));

// DI registraties
builder.Services.AddScoped<ITicketRepository, TicketRepository>();
builder.Services.AddScoped<ITicketService, TicketService>();

// Controllers en Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.MapControllers();
app.Run();
