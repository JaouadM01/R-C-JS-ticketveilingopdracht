namespace backend.models
{
    public class Ticket
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public TicketType Type { get; set; }
        public string Data { get; set; } = string.Empty;
    }


    public enum TicketType
    {
        Concert,
        AmusementPark,
        Movie,
        Museum,
        Theater,
        SportsEvent,
        Festival,
        Workshop,
        Exhibition,
        Transport,
        Zoo,
        Aquarium,
        Conference
    }
}