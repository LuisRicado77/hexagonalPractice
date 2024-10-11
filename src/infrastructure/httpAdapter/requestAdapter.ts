import { EventService } from "../services/Event.service";
import {schemaValidator} from "../middleware/schema.middleware";
import { Response, Request, Router } from "express";
import { ManagementEvent } from '../../application/ManagementEvent';
import { ResponseAdapter } from './responseAdapter';
import { NotFoundError } from "../../domain/errors/NotFoundError";
import {eventSchemaCreate,eventSchemaUpdate} from "../schema/event.schema";


const EventSrv = new EventService();

const ManagementUseCase =  new ManagementEvent(EventSrv)


const eventRouter = Router();
//add
eventRouter.post("/",schemaValidator(eventSchemaCreate) ,async (req: Request, res: Response) =>{
    const body = req.body
    ResponseAdapter.handler(ManagementUseCase.register(body), req, res);
})

//getAll
eventRouter.get("/", async (req: Request, res: Response)=>{
    try {
        ResponseAdapter.handler(ManagementUseCase.getAll(),req,res);
    } catch (error) {
        throw new NotFoundError();
    }
})


//get
eventRouter.get("/:id", async (req: Request, res: Response) =>{
    
    
    try{
        const {id} = req.params;
        console.log(id);
        ResponseAdapter.handler(ManagementUseCase.getEventById(id),req,res)
    }catch(Error){
        throw new NotFoundError();
    }
})

//delete
eventRouter.delete("/:id", async (req:Request, res: Response) =>{
    const id = req.params.id
    try{
        ResponseAdapter.handler(ManagementUseCase.delete(id),req, res)
    }catch(error){
        throw new NotFoundError();
    }
})

//update
eventRouter.patch("/:id",schemaValidator(eventSchemaUpdate) , async (req: Request, res: Response) =>{
    const {id} = req.params;
    const body = req.body;
    try {
        ResponseAdapter.handler(ManagementUseCase.update(id,body), req,res)
    } catch (error) {
        throw new NotFoundError();
    }
})

export {eventRouter}