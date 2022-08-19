# Projeto-final-M4
## :hotel: Hotel Transilvânia API :hotel:
Projeto final do módulo 4 da Resilia Educação, desenvolvemos uma API Rest de um hotel. <br>
Projeto desenvolvido em Node.js com framework Express. <br>
Onde cada colaboradora ficou responsável por uma entidade e suas respectivas rotas, em cada entidade o método CRUD foi realizado.

## :heavy_check_mark:  Requisitos  :heavy_check_mark:

:small_blue_diamond: Node <br>
:small_blue_diamond: NPM <br>
:small_blue_diamond: Git <br>
:small_blue_diamond: VsCode ou qualquer editor de texto de preferência. <br>
:small_blue_diamond: Insomnia Rest ou Postman.



## :dart: Dependências de desenvolvimento API :dart:
```
cors: "^2.8.5"
```
```
express: "^4.18.1"
```
```
path": "^0.12.7"
```
```
sqlite3": "^5.0.11"
```
```
nodemon: "^2.0.19"
```
## :lock_with_ink_pen: Instalação da aplicação :lock_with_ink_pen:

:small_blue_diamond: Abra o terminal e rode os comandos abaixo: <br>

:small_blue_diamond: Clonando o repositório:
```
git clone https://github.com/LhaisCosta99/Projeto-final-M4
```
:small_blue_diamond: Entrando na pasta:
```
cd Projeto-final-M4
```
:small_blue_diamond: Para instalar pacotes:
```
npm install
```
:small_blue_diamond: Para rodar a aplicação:
```
npm start
```
## :footprints: Link Heroku :footprints:

https://transilvania-hotel.herokuapp.com/ <br>

## :footprints: Rotas da aplicação :footprints:
:small_blue_diamond: Os testes da API foram feitos via Insomnia e Postman. <br>

:small_blue_diamond: HOSPEDES <br>

:dart: Post-hospedes <br>
```js
//Cria registros.

/hospedes/

{
    "nome": "Lhais",
    "cpf": "12345678950",
    "email": "lhais@lhais.com",
    "telefone": "02140028926"
}
```
:speech_balloon: Resposta <br>
```js
{
	"Sucesso": "Registro inserido com sucesso!"
}
```
:dart: Get-hospedes <br>
```js
//Busca o ":id". O get que busca todos os registros na sua entidade.

/hospedes/:id

{
		"id": 4,
		"nome": "Lhais",
		"cpf": "12345678950",
		"email": "lhais@lhais.com",
		"telefone": "02140028926"
}
```
:dart: Patch-hospedes <br>
```js

//Atualiza ":id". Modifica registros através do id .  

/hospedes/:id
{
		"id": 4,
		"nome": "Lhais",
		"cpf": "12345678950",
		"email": "lhais@lhais.com",
		"telefone": "02140028926"
}
```
:speech_balloon: Resposta <br>
```js
{
	"message": "Registro atualizado com sucesso",
	"id": "5"
}
```
:dart: Delete-hospedes <br>
```js
//Troque ":id" pelo id que você quer deletar. 
/hospedes/:id
```
:speech_balloon: Resposta <br>
```js
{
	"message": "Registro deletado com sucesso",
	"id": "10"
}
```

## :speech_balloon: Respostas em cada erro. :speech_balloon:
```
{
	"message": "Nome inválido, deve ter no mínimo 3 caracteres"
}
```
```
{
	"message": "CPF inválido, favor rever a requisição."
}
```
```
{
	"message": "Email inválido, favor rever a requisição."
}
```
```
{
	"message": "Telefone inválido, favor rever a requisição."
}
```
:small_blue_diamond: RESERVAS <br>
:dart: Post-reservas <br>
```js
//Cria registros.

/reservas/

{
    "idCliente": 1,
    "idQuarto": 1,
    "qtdDias": 2,
    "checkIn": 2022-05-06,
    "checkOut": 2022-05-07
}
```
:speech_balloon: Resposta <br>
```js
{
	"Sucesso": "Reserva inserida com sucesso!"
}
```
:dart: Get-reservas <br>
```js
//Busca o ":id". O get que busca todos os registros na sua entidade.

/reservas/:id

{
	"idCliente": 1,
	"idQuarto": 1,
	"qtdDias": 2,
	"checkIn": 2022-05-06,
	"checkOut" : 2022-05-07
}
```
:dart: Patch-reservas <br>
```js

//Atualiza ":id". Modifica registros através do id .  

/reservas/:id
{
	"idCliente": 1,
	"idQuarto": 1,
	"qtdDias": 2,
	"checkIn": 2022-05-06,
	"checkOut" : 2022-05-07
}
```
:speech_balloon: Resposta <br>
```js
{
	"message": "Reserva atualizada com sucesso",
	"id": "2"
}
```
:dart: Delete-reservas <br>
```js
//Troque ":id" pelo id que você quer deletar. 
/reservas/:id
```
:speech_balloon: Resposta <br>
```js
{
	"message": "Reserva deletada com sucesso",
	"id": "2"
}
```

## :speech_balloon: Respostas em cada erro. :speech_balloon:
```
{
	"message": "Reserva não encontrada para esse id"
}
```
```
{
	"message": "Reserva não encontrada"
}
```
:small_blue_diamond: QUARTOS <br>
:dart: Post-quartos <br>
```js
//Cria registros.

/quartos/

```js
{
   "numero": 96, 
   "tipo": “presidencial”, 
   "status": “livre” 
}
```
:speech_balloon: Resposta <br>
```js
{
	"Sucesso": "Registro inserido com sucesso!"
}
```
:dart: Get-quartos <br>
```js
//Busca o “:numero” do quarto. O get que busca todos os registros na sua entidade.

/quartos/:numero

{
	"id": 8,
	"numero": 96,
	"tipo": "presidencial",
	"status": "livre"
}
```
:dart: Patch-quartos <br>
```js

//Atualiza ":numero". Modifica registros através do número.  

/quartos/:numero
{
		"numero": 96,
		"tipo": "presidencial",
		"status": "ocupado" 
}
```
:speech_balloon: Resposta <br>
```js
{
	"message": "Registro atualizado com sucesso",
        "numero": “96”
}
```
:dart: Delete-quartos <br>
```js
//Troque ":id" pelo id que você quer deletar. 
/quartos/:id
```
:speech_balloon: Resposta <br>
```js
{
	"message": "Registro deletado com sucesso",
	"id": "8"
}
```
## :speech_balloon: Respostas em cada erro. :speech_balloon:
```
{
	"message": "Digite um número de quarto válido"
}
```
```
{
	"message": "Número de quarto inexistente"
}
```
```
{
	"message": "Número de quarto inválido"
}
```

## :people_hugging: Links externos :people_hugging:
 https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction <br>
https://developer.mozilla.org/pt-BR/docs/Glossary/CORS <br>
https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/ <br>
https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API <br>
https://mundodacomputacaointegral.blogspot.com/2021/04/conhecendo-o-insomnia.html <br>
https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD


## :people_hugging: Colaboradoras :people_hugging:
:pen: Carol <br>
:pen: Ivy <br>
:pen: Lhaís <br>
:pen: Luana <br>
