import { IEventService } from "../domain/services/IEvent.service";
import { IEventCreate } from "../domain/interfaces/iEvent.interface";
import { NotCreatedError } from "../domain/errors/NotCreateError";

export class RegisterEvent {
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
}
