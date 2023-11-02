import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { CompanyService } from '../../services/empresa/CompanyService';

class CompanyController {
    async handle(request: Request, response: Response) {
        const { nome_empresa, cnpj, cep, endereco, numero, telefone, email } = request.body;

        const companyService = new CompanyService();

        const company = await companyService.execute({ nome_empresa, cnpj, cep, endereco, numero, telefone, email });

        return response.json(company);
    }
}

export { CompanyController };
