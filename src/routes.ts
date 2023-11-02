import {Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthController } from './controllers/auth/AuthController';
import { PrismaClient } from '@prisma/client';
import { CompanyController } from './controllers/empresa/CompanyController';
export const router = Router();


router.post('/users', new CreateUserController().handle);

// Rota para autenticar o usuário
router.post('/auth', new AuthController().handle);


// Rota para listar todos os usuários
router.get('/users', async (request: Request, response: Response) => {
    const prisma = new PrismaClient();

    const users = await prisma.usuario.findMany();

    return response.json(users);
});

// Rota para listar um usuário
router.get('/users/:id', async (request: Request, response: Response) => {
    const prisma = new PrismaClient();
    const { id } = request.params;

    const user = await prisma.usuario.findUnique({
        where: {
            id: Number(id)
        }
    });

    return response.json(user);
});

// Rota para buscar um usuário pelo nome
router.get('/users/search/:nome', async (request: Request, response: Response) => {
    const prisma = new PrismaClient();
    const { nome } = request.params;

    const user = await prisma.usuario.findFirst({
        where: {
            nome: nome
        }
    });

    return response.json(user);
});

// Rota para cadastrar uma empresa
router.post('/companies', async (request: Request, response: Response) => {
    const prisma = new PrismaClient();
    const { nome_empresa, cnpj, cep, endereco, numero, telefone, email } = request.body;

    const company = await prisma.empresa.create({
        data: {
            nome_empresa,
            cnpj,
            cep,
            endereco,
            numero,
            telefone,
            email
        }
    });

    return response.json(company);
}
);

