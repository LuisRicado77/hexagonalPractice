import express from "express";
import {Request, Response} from "express"
import { eventRouter } from "./routes/event.router";


const app = express();

app.use(express.json());
app.use("/event", eventRouter);



app.get("/", async (req: Request, res: Response) => {
  await res.status(200).send({ msg:"hello luis probando" });
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
