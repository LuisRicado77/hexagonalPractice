import { IEvent, IEventCreate } from '../../domain/interfaces/iEvent.interface';
import { IEventService } from "../../domain/services/IEvent.service";

describe("Test use case Management Event CRUD", () => {
  class EventServiceMock implements IEventService {
    async create(event: IEventCreate): Promise<IEvent> {
      
        return{ 
            id: "657",
            title: "lo mrjot",
            description: "",
            date: new Date('2024-12-14'),
            location: "",
            organizer: ""
        }
    }
    async getById(id: IEvent["id"]): Promise<IEvent> {
        return{ 
            id: id,
            title: "lo mrjot",
            description: "",
            date: new Date('2024-12-14'),
            location: "",
            organizer: ""
        }
            
    }
    async update(id: string, event: IEvent): Promise<IEvent> {
        return{ 
            ...event,
            id: "657",
            date: new Date('2024-12-14')
        }
    }
    async delete(id: IEvent["id"]): Promise<void> {
        return
    }
   async getAll(): Promise<IEvent[]> {
    return Promise.resolve([
        {
          id: "657",
          title: "lo mejor",
          description: "",
          date: new Date('2024-12-14'),
          location: "",
          organizer: ""
        },
        {
          id: "658",
          title: "otro evento",
          description: "Descripción del segundo evento",
          date: new Date('2024-11-20'),
          location: "Madrid",
          organizer: "Organizador 2"
        }
      ]);
    }
  }

  it("Should register, update, delete, get and get all with success", () => {});
});
