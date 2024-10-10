/*import { Router, Response, Request } from "express";

const eventRouter = Router();

eventRouter.get("/", async (req: Request, res: Response) => {
  try {
    const books = await get();
    res.status(200).send({
      msg: "Read wih success",
      data: books,
    });
  } catch (error) {
    const err = error as Error;
    const errorMsg = err?.message;
    res.send(400).send({
      msg: errorMsg || "Error in Database",
    });
  }
});

eventRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
      const books = await deleteBookById(id);
      res.status(200).send({
        msg: "Deleted wih success",
        data: books,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in Database",
      });
    }
  });


eventRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const books = await getBooksById(id);
    res.status(200).send({
      msg: "Read wih success",
      data: books,
    });
  } catch (error) {
    const err = error as Error;
    const errorMsg = err?.message;
    res.send(400).send({
      msg: errorMsg || "Error in Database",
    });
  }
});

//para creación
eventRouter.post(
  "/",
  schemaMiddleware(createBookSchema),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const response = await addBook(body);
      res.status(201).send({
        msg: "created with success",
        data: response,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in database",
      });
    }
  }
);

//para actualizar
eventRouter.patch(
  "/:id",
  schemaMiddleware(updateBookSchema),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await updateBook(id, body);
      res.status(200).send({
        msg: "Update with success",
        data: response,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in Database",
      });
    }
  }
);
export { eventRouter };*/
