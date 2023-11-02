import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { AuthUserService } from '../../services/auth/AuthService';


class AuthController {
    async handle(request: Request, response: Response) {
        const { email, senha } = request.body;

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({ email, senha });

        return response.json(auth);
    }
}

export { AuthController };