using Microsoft.EntityFrameworkCore;
using backend.data;
using backend.services;
using backend.repositories;

var builder = WebApplication.CreateBuilder(args);

// SQLite + EF
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=tickets.db"));


// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:5173") // frontend URL
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// DI registraties
builder.Services.AddScoped<ITicketRepository, TicketRepository>();
builder.Services.AddScoped<ITicketService, TicketService>();

builder.Services.AddScoped<IConcertTicketExampleRepository, ConcertTicketExampleRepository>();
builder.Services.AddScoped<IConcertTicketExampleService, ConcertTicketExampleService>();


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

// Use CORS before routing
app.UseCors("AllowFrontend");


app.UseAuthorization();
app.MapControllers();
app.Run();
