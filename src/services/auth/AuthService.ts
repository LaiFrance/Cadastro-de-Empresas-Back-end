import PrismaClient  from "../../prisma"
import bcrypt from "bcryptjs";

interface AuthRequest {
    email: string;
    senha: string;
}

class AuthUserService {
    async execute({ email, senha }: AuthRequest) {
        if(!email || !senha){
            throw new Error("Missing information");
        }

        // Verificar se o usuário existe
        const user = await PrismaClient.usuario.findFirst({
            where: {
                email
            }
        });

        if(!user){
        throw new Error("Email or password incorrect" );
        }

        // Verificar se a senha está correta
        const passwordMatch = await bcrypt.compare(senha, user.senha);

        if(!passwordMatch){
            throw new Error("Email or password incorrect");
        }

        else{
            return ('Login realizado com sucesso');

    }

}

}

export { AuthUserService };