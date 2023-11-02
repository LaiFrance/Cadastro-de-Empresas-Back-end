import PrismaClient from "../../prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthRequest {
  email: string;
  senha: string;
}

class AuthUserService {
  async execute({ email, senha }: AuthRequest) {
    if (!email || !senha) {
      throw new Error("Missing information");
    }

    // Verificar se o usuário existe
    const user = await PrismaClient.usuario.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    // Verificar se a senha está correta
    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    // Gerar o token
    const token = jwt.sign(
      {
        nome: user.nome,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id.toString(),
        expiresIn: "30d"
      }
    );

    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      token: token
    };
  }
}

export { AuthUserService };
