namespace backend.models.dto;

public class TicketInputDto
{
    public string Type { get; set; } = string.Empty;

    // Instead of a Dictionary, make it match ConvertedTicket
    public string JsonData { get; set; } = string.Empty;
}
