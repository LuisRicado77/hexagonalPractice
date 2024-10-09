import { Router, Response, Request } from "express";

const eventRouter = Router();

eventRouter.get("/", async (req: Request, res: Response) => {
  await res.status(200).send({
    msg: "desde router event",
  });
});
export { eventRouter };
