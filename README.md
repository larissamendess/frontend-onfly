# Teste Frontend - Onfly

## Descrição
 Esse projeto tem como objetivo implementar a busca de hotéis de acordo com layout enviado pela Onfly.
 Funcionalidades principais:
 - Buscar hotéis por cidade
 - Filtrar hotéis
 - Exibir lista de hotéis com nome, informações de comodidades, preços e imagem.
 - Filtrar hotéis por menor ou maior preço
 - Navegar pela lista de hotéis via paginação

## Tecnologias utilizadas

- Framework - Vue.js 3
- Framework Quasar para UI
- Typescript
- Pinia
- Vite + Quasar
- Json Server
- Sass
- Vitest

##  Boas práticas

- [x] Componentização
- [x] Nomes descritivos e claros em variáveis, funções, e classes
- [x] Separação do service
- [x] Desestruturação de props 
- [x] Tratamento de erros, usando try catch
- [x] Renderização condicional com ifs, e ternários


## Como rodar o projeto

- Clone o repositório: git clone []
- Entre na pasta : cd onfly
- Instale as dependências : npm install 
- Inicie o servidor Json Server: npx json-server --watch data/payload.json --port 3000
- Inicie o servidor de desenvolvimento: npm run dev
- O projeto estará disponivel na porta http://localhost:9000/
- Para rodar o teste: npm run test


# Quasar App (onfly)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
