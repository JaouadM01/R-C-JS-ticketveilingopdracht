import { z } from "zod";

export const TicketSchemas = {
  Concert: z.object({
    type: z.literal("Concert"),
    data: z.object({
      event: z.string().min(1, "Event is required"),
      date: z.string().min(1, "Date is required"),
      venue: z.string().min(1, "Venue is required"),
      seat: z.string().min(1, "Seat is required"),
      price: z.string().min(1, "Price is required")
    })
  }),
  AmusementPark: z.object({
    type: z.literal("AmusementPark"),
    data: z.object({
      parkName: z.string().min(1, "Park name is required"),
      validFrom: z.string().min(1, "Valid from is required"),
      validTo: z.string().min(1, "Valid to is required"),
      accessType: z.string().min(1, "Access type is required")
    })
  }),
  Movie: z.object({
    type: z.literal("Movie"),
    data: z.object({
      title: z.string().min(1, "Movie title is required"),
      startTime: z.string().min(1, "Start time is required"),
      hall: z.string().min(1, "Hall is required"),
      date: z.string().min(1, "Date is required")
    })
  }),
  Museum: z.object({
    type: z.literal("Museum"),
    data: z.object({
      museumName: z.string().min(1, "Museum name is required"),
      entryDate: z.string().min(1, "Entry date is required"),
      ticketNumber: z.string().min(1, "Ticket number is required")
    })
  }),
  Theater: z.object({
    type: z.literal("Theater"),
    data: z.object({
      play: z.string().min(1, "Play name is required"),
      date: z.string().min(1, "Date is required"),
      seat: z.string().min(1, "Seat is required"),
      hall: z.string().min(1, "Hall is required")
    })
  }),
  SportsEvent: z.object({
    type: z.literal("SportsEvent"),
    data: z.object({
      match: z.string().min(1, "Match info is required"),
      team: z.string().min(1, "Team is required"),
      stadium: z.string().min(1, "Stadium is required"),
      date: z.string().min(1, "Date is required")
    })
  }),
  Festival: z.object({
    type: z.literal("Festival"),
    data: z.object({
      name: z.string().min(1, "Festival name is required"),
      startDate: z.string().min(1, "Start date is required"),
      endDate: z.string().min(1, "End date is required"),
      location: z.string().min(1, "Location is required")
    })
  }),
  Workshop: z.object({
    type: z.literal("Workshop"),
    data: z.object({
      topic: z.string().min(1, "Topic is required"),
      date: z.string().min(1, "Date is required"),
      instructor: z.string().min(1, "Instructor is required")
    })
  }),
  Exhibition: z.object({
    type: z.literal("Exhibition"),
    data: z.object({
      title: z.string().min(1, "Exhibition title is required"),
      location: z.string().min(1, "Location is required"),
      date: z.string().min(1, "Date is required")
    })
  }),
  Transport: z.object({
    type: z.literal("Transport"),
    data: z.object({
      departure: z.string().min(1, "Departure is required"),
      destination: z.string().min(1, "Destination is required"),
      departureTime: z.string().min(1, "Departure time is required"),
      seat: z.string().min(1, "Seat is required")
    })
  }),
  Zoo: z.object({
    type: z.literal("Zoo"),
    data: z.object({
      zooName: z.string().min(1, "Zoo name is required"),
      entryDate: z.string().min(1, "Entry date is required"),
      ticketNumber: z.string().min(1, "Ticket number is required"),
      visitorName: z.string().min(1, "Visitor name is required")
    })
  }),
  Aquarium: z.object({
    type: z.literal("Aquarium"),
    data: z.object({
      aquariumName: z.string().min(1, "Aquarium name is required"),
      entryDate: z.string().min(1, "Entry date is required"),
      ticketCode: z.string().min(1, "Ticket code is required")
    })
  }),
  Conference: z.object({
    type: z.literal("Conference"),
    data: z.object({
      name: z.string().min(1, "Conference name is required"),
      speaker: z.string().min(1, "Speaker is required"),
      date: z.string().min(1, "Date is required"),
      location: z.string().min(1, "Location is required")
    })
  })
};

export type TicketInputDto =
  | z.infer<typeof TicketSchemas.Concert>
  | z.infer<typeof TicketSchemas.AmusementPark>
  | z.infer<typeof TicketSchemas.Movie>
  | z.infer<typeof TicketSchemas.Museum>
  | z.infer<typeof TicketSchemas.Theater>
  | z.infer<typeof TicketSchemas.SportsEvent>
  | z.infer<typeof TicketSchemas.Festival>
  | z.infer<typeof TicketSchemas.Workshop>
  | z.infer<typeof TicketSchemas.Exhibition>
  | z.infer<typeof TicketSchemas.Transport>
  | z.infer<typeof TicketSchemas.Zoo>
  | z.infer<typeof TicketSchemas.Aquarium>
  | z.infer<typeof TicketSchemas.Conference>;
