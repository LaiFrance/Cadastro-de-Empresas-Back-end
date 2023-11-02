import PrismaClient  from "../../prisma"
import bcrypt from "bcryptjs";

interface CompanyRequest {
    nome_empresa: string;
    cnpj: string;
    cep: string;
    endereco: string;
    numero: number;
    telefone: string;
    email: string;
}

class CompanyService {
    async execute({ nome_empresa, cnpj, cep, endereco, numero, telefone, email }: CompanyRequest) {
        if(!nome_empresa || !cnpj || !cep || !endereco || !numero || !telefone || !email){
            throw new Error("Missing information");
        }

        // Verificar se a empresa existe
        const companyAlreadyExists = await PrismaClient.empresa.findFirst({
            where: {
                email,
                cnpj,
                nome_empresa
            }
        });

        if(companyAlreadyExists){
            throw new Error("Company already exists");
        }
        else{
            console.log('Empresa criada com sucesso');
        }

        // Salvar a empresa no banco de dados
        const company = await PrismaClient.empresa.create({
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

        return company;

    }

}

export { CompanyService };