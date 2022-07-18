# <p align = "center"> DrivenPass </p>

<p align="center">
   <img src="https://w7.pngwing.com/pngs/262/508/png-transparent-teplogidrostroy-password-manager-admin-icon-data-teplogidrostroy-system-thumbnail.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-CarolXavier-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/carol-xavier/projeto19-drivenpass?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Gerenciador de dados sensíveis, incluindo credenciais de login, notas seguras, informações de cartões e para login em redes wi-fi.
***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Bcrypt e Cryptr
- Node.js
- TypeScript
- PostgreSQL e Prisma

***

## :rocket: Rotas

```yml
POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com", (valor único)
        "senha": "loremipsum" (mínimo de 10 caracteres)
}
```
    
```yml 
POST /sign-in
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
POST /safe-notes (autenticada)
    - Rota para inserir uma nova nota segura
    - headers: { "Authorization": "Bearer $token" }
    - body: {
       "title":"teste", (máximo 50 caracteres) (valor único)
       "note":"mais um teste" (máximo 1000 caracteres)
    }
```

```yml
GET /safe-notes/:id (autenticada)
    - Rota para listar uma nota segura pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /safe-notes (autenticada)
    - Rota para listar todas as notas seguras do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /safe-notes/:id (autenticada)
    - Rota para deletar uma nota segura pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
POST /credentials (autenticada)
    - Rota para inserir nova credenciais de login para uma URL específica
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "crdName":"Teste semi-automatizado", (valor único)
        "url":"https://www.thunderclient.com",
        "userName":"teste thunderclient",
        "password":"teste"
    }
```

```yml
GET /credentials/:id (autenticada)
    - Rota para listar uma credencial pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /credentials (autenticada)
    - Rota para listar todas as credenciais do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /credentials/:id (autenticada)
    - Rota para deletar uma credencial específica do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /cards (autenticada)
    - Rota para inserir nova informações de cartão do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
          "cardNickname": "teste automatizado", (valor único)
          "cardNumber": 00000000000000,
          "printedName": "lalala",
          "expirationDate": "DD/MM/YYYY",
          "virtual": true || false,
          "type": "crédito" || "débito",
          "cvv": "000",
          "password": "lalalalal"
    }
```

```yml
GET /cards/:id (autenticada)
    - Rota para listar uma informação de cartão pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /cards (autenticada)
    - Rota para listar todas as informações de cartões do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
DELETE /cards/:id (autenticada)
    - Rota para deletar um cartão do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
POST /wifi (autenticada)
    - Rota para inserir nova informações de rede wifi do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
         "wifiNickname":"Teste automatizado", (valor único)
         "wifiName":"wifi da facul",
         "password":"lalala"
    }
```

```yml
GET /wifi/:id (autenticada)
    - Rota para listar uma informação de wifi pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /wifi (autenticada)
    - Rota para listar todas as informações de wifi do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
```yml
DELETE /wifi/:id (autenticada)
    - Rota para deletar um wifi do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 
***

## 🏁 Rodando a aplicação

Este projeto foi implementado utilizando Node.js e o framework Express.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/carol-xavier/projeto19-drivenpass.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm run dev
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/carol-xavier/projeto19-drivenpass.git) que contem a interface da aplicação, para testar o projeto por completo.
