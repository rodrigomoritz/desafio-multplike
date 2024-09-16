## Description

Desafio Multiplike - NodeJS.

## Instalação
Clone o repositório.

Instale as dependências:

```bash
$ npm install
```

## Compile and run the project

```bash
# watch mode
$ npm run start:dev
```

## Variáveis de Ambient

```bash
secret: 'your-secret-key'
```

## Resources

Desfio usando NodeJS:

- Desafio: Desenvolvimento de uma API com camada de segurança
 
Você deve desenvolver uma API em Javascript ou Typescript utilizando um framework de sua escolha (como Express, Nest, Fasify, Koa,...) 
com uma camada de segurança adequada para proteger os endpoints.

## Testando a API

Endpoints
1. Autenticação - Login
Rota: /auth/login
Método: POST
Descrição: Autentica o usuário e retorna um token JWT.
Requisição:
```
URL: http://localhost:3000/auth/login
Body:
json
{
  "username": "test",
  "password": "123456"
}
```
Resposta (Exemplo):
json
```
{
  "access_token": "your_jwt_token"
}
```
Explicação: Este endpoint autentica o usuário e retorna um token JWT. O token deve ser usado em todas as requisições subsequentes para endpoints protegidos.

3. Obter Dados Protegidos
Rota: /data
Método: GET
Descrição: Retorna uma lista de dados, protegido por autenticação JWT.
Requisição:

URL: http://localhost:3000/data
Headers:
Authorization: Bearer your_jwt_token
Resposta (Exemplo):
```
URL: http://localhost:3000/data
[
  {
    "id": 1,
    "name": "Item 1",
    "value": 100
  },
  {
    "id": 2,
    "name": "Item 2",
    "value": 200
  }
]
```
Explicação: Este endpoint retorna uma lista de dados. O acesso é protegido, então você deve enviar o token JWT no cabeçalho da requisição.

5. Obter Dados por ID
Rota: /data/:id
Método: GET
Descrição: Retorna um item específico com base no id.
Requisição:
URL: http://localhost:3000/data/1 (Substitua 1 pelo id desejado)
Headers:
Authorization: Bearer your_jwt_token
Resposta (Exemplo):
```
URL: http://localhost:3000/data/1
{
  "id": 1,
  "name": "Item 1",
  "value": 100
}
```
Explicação: Este endpoint retorna um item específico. Assim como no endpoint anterior, você precisa estar autenticado.

6. Criar Novo Item
Rota: /data
Método: POST
Descrição: Cria um novo item. Protegido por autenticação JWT.
Requisição:
URL: http://localhost:3000/data
Headers:
Authorization: Bearer your_jwt_token
Body (Exemplo):
```
URL: http://localhost:3000/data
{
  "name": "Novo Item",
  "value": 500
}
```
Resposta (Exemplo):
```
{
  "id": 3,
  "name": "Novo Item",
  "value": 500
}
```
Explicação: Este endpoint cria um novo item no sistema. Envie o token JWT no cabeçalho e os dados no corpo da requisição.

8. Atualizar Item
Rota: /data/:id
Método: PATCH
Descrição: Atualiza um item existente com base no id.
Requisição:
URL: http://localhost:3000/data/1 (Substitua 1 pelo id do item)
Headers:
Authorization: Bearer your_jwt_token
Body (Exemplo):
```
URL: http://localhost:3000/data/1
{
  "name": "Item Atualizado",
  "value": 300
}
```
Resposta (Exemplo):
```
{
  "id": 1,
  "name": "Item Atualizado",
  "value": 300
}
```
Explicação: Este endpoint atualiza os dados de um item existente, identificado pelo id. O token JWT é obrigatório.

10. Deletar Item
Rota: /data/:id
Método: DELETE
Descrição: Deleta um item com base no id.
Requisição:
URL: http://localhost:3000/data/1 (Substitua 1 pelo id do item a ser deletado)
Headers:
Authorization: Bearer your_jwt_token
Resposta (Exemplo):
```
URL: http://localhost:3000/data/1
{
  "message": "Item deleted successfully"
}
```
Explicação: Este endpoint deleta um item específico. O token JWT é obrigatório.


## Erros Comuns
* 401 Unauthorized: O token JWT não foi enviado ou está inválido.
* 404 Not Found: O item solicitado não foi encontrado no sistema.
* 400 Bad Request: Os dados enviados na requisição estão incorretos ou faltando.

# Tecnologias Utilizadas
* NestJS
* JWT (JSON Web Token)
* TypeScript
* bcryptjs para hashing de senhas


## Stay in touch

- Author - [Rodrigo Moritz](https://www.instagram.com/rodrigo_moritz/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
