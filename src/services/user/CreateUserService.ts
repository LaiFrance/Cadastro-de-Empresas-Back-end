import  PrismaClient  from '../../prisma'
import bcrypt from 'bcryptjs';

interface ICreateUserRequest {
    nome: string;
    email: string;
    senha: string;
}


class CreateUserService {
  async execute({ nome, email, senha }: ICreateUserRequest) {

 if(!nome || !email || !senha){
        throw new Error("Missing information");
    }

    else if(senha.length < 6){
        throw new Error("Password must be at least 6 characters");
    }

    else if(!email.includes('@')){
        throw new Error("Invalid email");
    }

    

    // Verificar se o usuário existe
    const userAlreadyExists = await PrismaClient.usuario.findFirst({
        where: {
            email
        }
    });

    if(userAlreadyExists){
        throw new Error("User already exists");
    }
    else{
        console.log('Usuário criado com sucesso');
    }

    // Criptografar a senha
    const passwordHash = await bcrypt.hash(senha, 8);

    // Salvar o usuário no banco de dados
    const user = await PrismaClient.usuario.create({
        data: {
            nome,
            email,
            senha: passwordHash
        }
    });

    return user;
}
}

export { CreateUserService };
