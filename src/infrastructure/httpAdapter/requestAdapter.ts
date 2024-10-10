import { EventService } from "../services/Event.service";

import { Response, Request, Router } from "express";
import {RegisterEvent} from "../../application/ManagementEvent";


const EventSrv = new EventService();

const registerUseCase =  new RegisterEvent(EventSrv)


const eventRouter = Router();

eventRouter.post("/", async (req: Request, res: Response) =>{
    const body = req.body
})

export {eventRouter}