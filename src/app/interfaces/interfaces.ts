export interface IJuror {
    jurorId: string,
    index: number,
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    address: string
}

export interface IEvent {
    eventId: string,
    eventName: string,
    index: number,
    eventDate: string,
    eventDuration: string,
    judgeName: string,
    defendantName: string,
    caseNumber: number,
    roomNumber: number
}