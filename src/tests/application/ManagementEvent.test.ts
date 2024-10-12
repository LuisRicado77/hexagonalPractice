import { ManagementEvent } from "../../application/ManagementEvent";
import { IEvent, IEventCreate } from "../../domain/interfaces/iEvent.interface";
import { IEventService } from "../../domain/services/IEvent.service";
import { NotCreatedError} from "../../domain/errors/NotCreateError";

describe("Test use case Management Event CRUD", () => {
  //ARRANGE
  class EventServiceMock implements IEventService {
    async create(event: IEventCreate): Promise<IEvent> {
      return {
        id: "657",
        title: "lo mrjot",
        description: "",
        date: new Date("2024-12-14"),
        location: "",
        organizer: "",
      };
    }
    async getById(id: IEvent["id"]): Promise<IEvent> {
      return {
        id: id,
        title: "lo mrjot",
        description: "",
        date: new Date("2024-12-14"),
        location: "",
        organizer: "",
      };
    }
    async update(id: string, event: IEvent): Promise<IEvent> {
      return {
        ...event,
        id: "657",
        date: new Date("2024-12-14"),
      };
    }
    async delete(id: IEvent["id"]): Promise<void> {
      return;
    }
    async getAll(): Promise<IEvent[]> {
      return Promise.resolve([
        {
          id: "657",
          title: "lo mejor",
          description: "",
          date: new Date("2024-12-14"),
          location: "",
          organizer: "",
        },
        {
          id: "658",
          title: "otro evento",
          description: "Descripción del segundo evento",
          date: new Date("2024-11-20"),
          location: "Madrid",
          organizer: "Organizador 2",
        },
      ]);
    }
  }

  class EventServiceErrorMock implements IEventService{

   async create(event: IEventCreate):Promise<IEvent>{
    return Promise.reject(new NotCreatedError());
    }
   async getById(id: IEvent["id"]): Promise<IEvent>{
      return
    }
   async update (id: string, event: IEvent):Promise<IEvent>{
      return
    }
    async delete(id: IEvent["id"]): Promise<void>{
      return 
    }
   async getAll (): Promise<IEvent[]>{
      return
    }
    
  }

  let useCase: ManagementEvent;
  let eventSrvMock: IEventService;
  let EventSrvErrorMock: EventServiceErrorMock;
  //HOOKS -> ciclo de vida del test
  //beforeeach
  beforeEach(() => {
    eventSrvMock = new EventServiceMock();
    EventSrvErrorMock = new EventServiceErrorMock();
    useCase = new ManagementEvent(eventSrvMock);
    useCase = new ManagementEvent(EventSrvErrorMock);
  });
  //beforeall
  //aftereach
  //afterall

   it("Should register, update, delete, get and get all with success", async () => {
    const event: IEventCreate ={
        title: "lo mrjot",
        description: "",
        date: new Date("2024-12-14"),
        location: "",
        organizer: "",
    }
     //act
    const response = await useCase.register(event)

    //assert
    expect(response).toStrictEqual(
      {
        id: "657",
        title: "lo mrjot",
        description: "",
        date: new Date("2024-12-14"),
        location: "",
        organizer: "",
      }
    )

  });

  it("Should throw NotCreatedError if event creation fails", async () =>{
    const event: IEventCreate = {
      title: "Evento fallido",
      description: "",
      date: new Date("2024-12-14"),
      location: "",
      organizer: "",
    };

      // Act & Assert
     await expect(useCase.register(event)).rejects.toThrow(NotCreatedError);
  })
});
