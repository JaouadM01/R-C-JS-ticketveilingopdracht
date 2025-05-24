namespace backend.models
{
    public class ConcertTicketExample
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Event { get; set; }
        public DateTime Date { get; set; }
        public string Venue { get; set; }
        public string Seat { get; set; }
        public double Price{ get; set; }
    }
}