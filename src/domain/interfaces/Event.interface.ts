
export interface IEvent{
    id: string,
    title: string,
    description: string,
    date: Date,
    location: string,
    organizer: string
}

export interface IEventCreate extends Omit<IEvent, "id">{}