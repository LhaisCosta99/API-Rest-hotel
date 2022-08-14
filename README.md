# Projeto-final-M4
## :hotel: Sobre :hotel:

## :heavy_check_mark:  Requisitos   :heavy_check_mark:

 :small_blue_diamond:Node <br>
 :small_blue_diamond: NPM <br>


## :dart: Denpendencias de desnvolvimento API :dart:
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

Clonando o repositório: Clonando o repositório:
```
git clone https://github.com/LhaisCosta99/Projeto-final-M4
```
:small_blue_diamond: Entrando na pasta:
```
cd Projeto-final-M4
```
:small_blue_diamond: Para intalar pacotes:
```
npm instal 
```
:small_blue_diamond: Para rodar a aplicação:
```
npm start
```
## :footprints: Rotas da aplicação :footprints:
:small_blue_diamond: Os teste da API foram feitos via Insomnia e Postman. <br>
:small_blue_diamond: HOSPEDES <br>
:dart: Post-hospedes <br>
```{
    "nome": "Lhais",
    "cpf": "12345678950",
    "email": "lhais@lhais.com",
    "telefone": "02140028926"
}
```
:speech_balloon: Resposta <br>
```
{
	"Sucesso": "Registro inserido com sucesso!"
}
```
:dart: Get-hospedes <br>
```
	{
		"id": 4,
		"nome": "Lhais",
		"cpf": "12345678950",
		"email": "lhais@lhais.com",
		"telefone": "02140028926"
	}
```
:dart: Patch-hospedes <br>
```{
		"id": 4,
		"nome": "Lhais",
		"cpf": "12345678950",
		"email": "lhais@lhais.com",
		"telefone": "02140028926"
	}
```
:speech_balloon: Resposta <br>
```
{
	"message": "Registro atualizado com sucesso",
	"id": "5"
}
```
:dart: Delete-hospedes <br>
```
http://localhost:3000/hospedes/10
```
:speech_balloon: Resposta <br>
```
{
	"message": "Registro deletado com sucesso",
	"id": "10"
}
```

## :speech_balloon: Respostas caso algo esteje incompleto.
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
## :people_hugging: Links externos :people_hugging:
 https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction <br>
https://developer.mozilla.org/pt-BR/docs/Glossary/CORS <br>
https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/ <br>
https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API <br>
https://mundodacomputacaointegral.blogspot.com/2021/04/conhecendo-o-insomnia.html <br>
## :people_hugging: Colaboradoras :people_hugging:
:pen: Carol <br>
:pen: Ivy <br>
:pen: Lhaís <br>
:pen: Luana <br>
