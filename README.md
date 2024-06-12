# bliss-teste

## Descrição

`bliss-teste` é uma aplicação Node.js que utiliza Puppeteer para automação de navegação web e Express para servir uma aplicação web.

## Instalação

Clone este repositório e navegue até o diretório do projeto:

```bash
git clone https://github.com/seu-usuario/bliss-teste.git
cd bliss-teste
```

Instale as dependências do projeto:

```bash
npm install
```

## Executando a Aplicação

### Rodar o Bot Diretamente

Para rodar o bot que realiza uma automação com Puppeteer, utilize o comando:

```bash
npm run run:bot
```

Este comando executa o arquivo index.js com os parâmetros --marketplace mercadolivre e --productName "pen drive".

### Iniciar o Servidor

Para iniciar o servidor utilize o comando:

```bash
npm start
```

#### Rotas:

```bash
http://localhost:3000/api/bot/start
```
