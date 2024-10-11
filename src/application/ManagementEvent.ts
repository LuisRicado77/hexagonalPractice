import { IEventService } from "../domain/services/IEvent.service";
import { IEvent, IEventCreate } from '../domain/interfaces/iEvent.interface';
import { NotCreatedError } from "../domain/errors/NotCreateError";
import { NotFoundError } from "../domain/errors/NotFoundError";

export class ManagementEvent {
  constructor(private readonly eventSrv: IEventService) {}

  async register(event: IEventCreate) {
    try {
      const newEvent = await this.eventSrv.create(event);
      return newEvent;
    } catch (error) {
      // if (error) {
      //     throw error;
      // } else {
      //     new NotCreatedError("Could not create a new user");
      // }
      throw error || new NotCreatedError();
    }
  }

  async update(id: string, event: IEvent){
    console.log("se ejecuto aplication")
    try {
      const updateEvent = await this.eventSrv.update(id,event)
      return updateEvent;

    } catch (error) {
      throw error || new NotCreatedError();
    }
  }

  async getEventById(id: string) {
    try {
      const event = await this.eventSrv.getById(id);
      return event;
    } catch (error) {
      throw error || new NotFoundError("Could not get data");
    }
  }


  async delete(id: string) {
    try {
      await this.eventSrv.delete(id);
    } catch (error) {
      throw error || new NotFoundError("Could not delete the event");
    }
  }

  async getAll(){
    try{
      const events = this.eventSrv.getAll()
      return await events;
    }catch (error){
      throw error || new NotFoundError("Could not found datas");
    }
  }

}
