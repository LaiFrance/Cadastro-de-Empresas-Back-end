import {Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  throw new Error('Erro teste'); 
});

// Rota para criar uma nova empresa
router.post('/empresa', (req: Request, res: Response) => {
  // Lógica para criar uma nova empresa
  res.send('Rota POST /empresa: Criar uma nova empresa');
});

// Rota para listar todas as empresas cadastradas
router.get('/empresas', (req: Request, res: Response) => {
  // Lógica para listar todas as empresas cadastradas
  res.send('Rota GET /empresas: Listar todas as empresas cadastradas');
});

// Rota para consultar uma empresa específica por CNPJ
router.get('/empresa/:cnpj', (req: Request, res: Response) => {
  const cnpj = req.params.cnpj;
  // Lógica para consultar uma empresa por CNPJ
  res.send(`Rota GET /empresa/${cnpj}: Consultar empresa por CNPJ`);
});

// Rota para atualizar os dados de uma empresa
router.put('/empresa/:cnpj', (req: Request, res: Response) => {
  const cnpj = req.params.cnpj;
  // Lógica para atualizar os dados de uma empresa por CNPJ
  res.send(`Rota PUT /empresa/${cnpj}: Atualizar dados da empresa`);
});

// Rota para excluir uma empresa
router.delete('/empresa/:cnpj', (req: Request, res: Response) => {
  const cnpj = req.params.cnpj;
  // Lógica para excluir uma empresa por CNPJ
  res.send(`Rota DELETE /empresa/${cnpj}: Excluir empresa`);
});



export { router}