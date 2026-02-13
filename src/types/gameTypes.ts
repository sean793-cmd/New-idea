// gameTypes.ts

// Interface for round data
export interface GameRound {
    roundId: number;
    startTime: Date;
    endTime: Date;
    players: Player[];
    winningTicket: Ticket;
}

// Interface for player information
export interface Player {
    playerId: number;
    name: string;
    tickets: Ticket[];
}

// Interface for ticket information
export interface Ticket {
    ticketId: number;
    numbers: number[];
    purchasedAt: Date;
}

// Interface for payout calculations
export interface Payout {
    ticket: Ticket;
    amount: number;
    payoutTime: Date;
}