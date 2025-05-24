
namespace backend.models;
public class ConvertedTicket
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Type { get; set; } = string.Empty;
    public string JsonData { get; set; } = string.Empty;
}
