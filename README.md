# Node.js + MongoDB API

API backend desenvolvida com Node.js e Express, integrada ao MongoDB, simulando a base de uma aplicação SaaS.  
O projeto demonstra conceitos fundamentais de backend, organização em camadas e conexão com banco de dados.

---

## Sobre o projeto

Este projeto foi criado com o objetivo de praticar o desenvolvimento de APIs utilizando Node.js, além de aplicar boas práticas como separação de responsabilidades, uso de variáveis de ambiente e integração com banco de dados NoSQL.

---

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv


## Funcionalidades

- Servidor web funcional com Express
- Conexão com MongoDB via Mongoose
- Estrutura modular organizada
- Preparado para expansão com rotas, autenticação e regras de negócio


## Estrutura do projeto


- config/
- controllers/
- models/
- routes/
- middleware/
- services/
- server.js
- package.json
  

## Como rodar o projeto

1. Clone o repositório
```bash
git clone https://github.com/luis-erfolgreich/nodejs-mongodb-api.git
```
2. Acesse a pasta
```bash
cd nodejs-mongodb-api
```
3. Instale as dependencias 
```bash
npm install
```
4. Configure as variáveis de ambiente
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/saas
JWT_SECRET=sua_chave_secreta
```
5. Inicie o servidor
```bash
node server.js
```
6. Resultado esperado

Servidor rodando na porta 3000
MongoDB conectado 


---


## Objetivo

Este projeto tem como foco:

- Praticar desenvolvimento backend
- Entender integração com banco de dados
- Aprender estruturação de projetos Node.js
- Criar base para aplicações reais

## Melhorias futuras

- Implementar autenticação com JWT
- Criar rotas completas (CRUD)
- Validação de dados
- Integração com frontend
- Deploy na AWS




