import { ManagementEvent } from "../../application/ManagementEvent";
import { IEvent, IEventCreate } from "../../domain/interfaces/iEvent.interface";
import { IEventService } from "../../domain/services/IEvent.service";
import { NotCreatedError} from "../../domain/errors/NotCreateError";
import { Response } from 'express';
import { NotFoundError } from "../../domain/errors/NotFoundError";

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
  }  

  class EventServiceErrorMock implements IEventService{

   async create(event: IEventCreate):Promise<IEvent>{
    return Promise.reject(new NotCreatedError());
    }
   async getById(id: IEvent["id"]): Promise<IEvent>{
      return Promise.reject(new NotFoundError());
    }
   async update (id: string, event: IEvent):Promise<IEvent>{
      return Promise.reject(new NotCreatedError());
    }
    async delete(id: IEvent["id"]): Promise<void> {
      console.log(`Deleting event with id: ${id}`);
      return Promise.reject(new NotFoundError());
    }
    
   async getAll (): Promise<IEvent[]>{
      return Promise.reject(new NotFoundError());
    }
    
  }

  let useCaseRegister: ManagementEvent;
  let useCaseGetId: ManagementEvent;
  let useCaseGetAll: ManagementEvent;
  let useCaseUpdate: ManagementEvent;
  let useCaseDelete: ManagementEvent
  let useCaseError: ManagementEvent;
  let eventSrvMock: IEventService;
  let EventSrvErrorMock: EventServiceErrorMock;
  let id: IEvent['id'];
  //HOOKS -> ciclo de vida del test
  //beforeeach
  beforeEach(() => {
    eventSrvMock = new EventServiceMock();
    EventSrvErrorMock = new EventServiceErrorMock();
    useCaseDelete = new ManagementEvent(eventSrvMock);
    useCaseUpdate = new ManagementEvent(eventSrvMock);
    useCaseRegister = new ManagementEvent(eventSrvMock);
    useCaseGetId = new ManagementEvent(eventSrvMock);
    useCaseGetAll = new ManagementEvent(eventSrvMock);
    useCaseError = new ManagementEvent(EventSrvErrorMock);
  });
  //beforeall
  //aftereach
  //afterall

   it("Should register with success", async () => {
    const event: IEventCreate ={
        title: "lo mrjot",
        description: "",
        date: new Date("2024-12-14"),
        location: "",
        organizer: "",
    }
     //act
    const response = await useCaseRegister.register(event)

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
  
  it("Should get By Id with success", async () =>{
    const response = await useCaseGetId.getEventById(id)

    expect(response).toStrictEqual(
      {
      id: id,
      title: "lo mrjot",
      description: "",
      date: new Date("2024-12-14"),
      location: "",
      organizer: ""
      }
    )

  });

  it("Should Get All with success", async () =>{
    const response = await useCaseGetAll.getAll();
    expect(response).toStrictEqual(
      [
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
      ]
    )
  })
  it("Should Update with success ", async ()=>{
    // Arrange
      const eventToUpdate: IEvent = {
        id: "657",
        title: "Evento actualizado",
        description: "Descripción actualizada",
        date: new Date("2024-12-14"),
        location: "Nueva ubicación",
        organizer: "Nuevo organizador",
      };

      //Act
      const response = await useCaseUpdate.update(eventToUpdate.id, eventToUpdate)


      //asert

      expect(response).toStrictEqual({
        id: "657",
        title: "Evento actualizado",
        description: "Descripción actualizada",
        date: new Date("2024-12-14"),
        location: "Nueva ubicación",
        organizer: "Nuevo organizador",
      })
  })
  it("Should Delete with success ", async ()=>{
    //arrange
    const deleteId = "33432";

    //act and assert
    await expect(useCaseError.delete(deleteId)).resolves.toBeUndefined();


  })

  it("Should throw NotCreatedError if event creation fails", async () =>{
    const event: IEventCreate = {
      title: "Evento fallido",
      description: "",
      date: new Date("2024-12-14"),
      location: "",
      organizer: "",
    };

      // Act & Assert
     await expect(useCaseError.register(event)).rejects.toThrow( new NotCreatedError);
  })

  it("Should throw NotFoundError if event getByid fails", async ()=>{
    //arrange
    const id = "3234"

    //act and assert
    await expect(useCaseError.getEventById(id)).rejects.toThrow(new NotFoundError)
    
  })

  it("Should throw NotFoundError if event getAll fails", async ()=>{
    
  
    //act and assert
    await expect(useCaseError.getAll()).rejects.toThrow(new NotFoundError)
    
  })
  it("Should throw an error if event update fails", async () => {
    // Reemplaza el servicio con el mock que falla
    
  
    const eventToUpdate: IEvent = {
      id: "657",
      title: "Evento con fallo",
      description: "Descripción actualizada",
      date: new Date("2024-12-14"),
      location: "Nueva ubicación",
      organizer: "Nuevo organizador",
    };
  
    // Act & Assert
    await expect(useCaseError.update(eventToUpdate.id, eventToUpdate)).rejects.toThrow(Error);
  });
  it("Should throw an error if event deletion fails", async () => {
    const deleteId = "33432";
    
    // Asegúrate de utilizar el mock que lanza errores correctamente
    await expect(useCaseError.delete(deleteId)).rejects.toThrow(new NotFoundError());
  });
  
});
