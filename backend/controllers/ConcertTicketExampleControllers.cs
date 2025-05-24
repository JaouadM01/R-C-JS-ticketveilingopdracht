using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.data;
using backend.models;
using backend.services;
using backend.models.dto;

namespace backend.controllers;

[ApiController]
[Route("api/[controller]")]
public class ConcertTicketExampleController : ControllerBase
{
    private readonly IConcertTicketExampleService _ticketService;

    public ConcertTicketExampleController(IConcertTicketExampleService ticketService)
    {
        _ticketService = ticketService;
    }

    [HttpPost]
    public async Task<ActionResult<ConvertedTicket>> Create([FromBody] ConcertTicketExample concertTicketExample)
    {
        try
        {
            var ticketdto = await _ticketService.AddTicketAsync(concertTicketExample);
            return Ok(ticketdto);
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new { error = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Interne serverfout", details = ex.Message });
        }
    }
}
