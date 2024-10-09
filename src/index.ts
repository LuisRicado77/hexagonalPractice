import express from "express";
import {Request, Response} from "express"
import { eventRouter } from "./routes/event.router";
import { Parameter } from "./utils/constants";
import { initDatabase } from "./infrastructure/database/db";


const app = express();

app.use(express.json());
app.use("/event", eventRouter);



app.get("/", async (req: Request, res: Response) => {
  await res.status(200).send({ msg:"hello luis probando" });
});

const url_database = "mongodb://"+Parameter.DATABASE_HOST+ ":"+Parameter.DATABASE_PORT+"/"+Parameter.DATABASE_NAME;


app.listen(3000, async () => {
  console.log(url_database);
  await initDatabase(url_database);
  console.log("Server running at port 3000");
});
