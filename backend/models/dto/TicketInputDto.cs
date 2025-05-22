
namespace backend.models.dto;
public class TicketInputDto
{
    public string Type { get; set; } = string.Empty;
    public Dictionary<string, object> Data { get; set; } = new();
}
