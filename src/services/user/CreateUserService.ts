import  PrismaClient  from '../../prisma'

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

    const user = await PrismaClient.usuario.create({
        data: {
            nome,
            email,
            senha
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