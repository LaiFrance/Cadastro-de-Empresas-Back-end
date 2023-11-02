import { Request, response, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email, senha } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ nome, email, senha });

    return response.json(user);
  }
}

export { CreateUserController };
