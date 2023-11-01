# Cadastro-de-Clientes-Back-end
<div style="display: flex; align-items: center;">
    <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySQL Logo" width="100" height="80">
    <img src="https://github.com/LaiFrance/Cadastro-de-Clientes-Back-end/assets/91226847/8c23b201-61c5-420c-945a-0ab60dbf22ae" alt="Node.js Logo" width="150" height="80">
    <img src="https://github.com/LaiFrance/Cadastro-de-Clientes-Back-end/assets/91226847/a31b3835-e5d5-4b44-99af-3213539569e0" alt="Captura de tela 2023-11-01 040736" width="150" height="80">
    <img src="https://github.com/LaiFrance/Cadastro-de-Clientes-Back-end/assets/91226847/0914029f-4cd7-4710-bfb4-eb954da4c333" alt="Transferir" width="150" height="80">
</div>





## Configuração do Backend do Projeto de Cadastro de Empresas

Este README fornece instruções passo a passo para configurar o backend do projeto de cadastro de empresas usando TypeScript e Express.

### Passo 1: Iniciar o projeto

Inicie o projeto usando o seguinte comando:

```
yarn init -y

```

Isso irá inicializar o seu projeto e criar um arquivo package.json.

### Passo 2: Instalar o TypeScript

Instale o TypeScript no ambiente de desenvolvimento com o seguinte comando:

```
yarn add typescript -D

```

Isso adicionará o TypeScript ao seu projeto como uma dependência de desenvolvimento.

### Passo 3: Instalar o Express

Instale o Express usando o seguinte comando:

```
yarn add express

```

O Express é um framework web para Node.js que será a base do seu backend.

### Passo 4: Instalar as tipagens do Express

Para obter sugestões de autocompletar para o Express, instale as tipagens do Express usando o seguinte comando:

```
yarn add @types/express -D

```

Isso permitirá que você tenha uma melhor experiência de desenvolvimento ao trabalhar com o Express.

### Passo 5: Inicializar o TypeScript

Finalmente, inicialize o TypeScript com a seguinte configuração:

```
yarn tsc --init

```
Isso criará um arquivo de configuração tsconfig.json que você pode ajustar de acordo com as necessidades do seu projeto.

### Passo 6 : Instalação das bibliotecas 

Siga as etapas abaixo para instalar a biblioteca `ts-node-dev` no seu projeto:

1. Certifique-se de ter o Node.js instalado no seu sistema. Você pode fazer o download em [nodejs.org](https://nodejs.org/).

2. No diretório do seu projeto, execute o seguinte comando para instalar o `ts-node-dev` globalmente (caso já não esteja instalado):

```
  yarn add ts-node-dev -D

```
3. Instale a Biblioteca para tratar erros

   ```
    yarn add express-async-errors

   ```
### Passo 7 : Rodando a Aplicação 

para rodar a aplicação basta digitar no terminal : 
```
yarn dev
```




