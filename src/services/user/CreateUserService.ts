import  PrismaClient  from '../../prisma'
import bcrypt from 'bcryptjs';

interface ICreateUserRequest {
    nome: string;
    email: string;
    senha: string;
}


class CreateUserService {
  async execute({ nome, email, senha }: ICreateUserRequest) {

 if(!email || !senha || !nome){
        throw new Error("Missing information");
    }

    const userAlreadyExists = await PrismaClient.usuario.findFirst({
        where: {
            email
        }
    });


    if(userAlreadyExists){
        throw new Error("User already exists");
    }

    const senhaHash = await bcrypt.hash(senha, 8);



    const user = await PrismaClient.usuario.create({
        data: {
            nome: nome,
            email: email,
            senha: senhaHash
        },
        select: {
            id: true,
            nome: true,
            email: true,
            
        }
    });

    return user;

    }

}


export { CreateUserService };