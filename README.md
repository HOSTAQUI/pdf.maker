# pdf.maker

[![build](https://github.com/HOSTAQUI/pdf.maker/actions/workflows/build.yml/badge.svg)](https://github.com/HOSTAQUI/pdf.maker/actions/workflows/build.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](https://badge.fury.io/js/%40hostaqui%2Fpdf-maker.svg)](https://badge.fury.io/js/%40hostaqui%2Fpdf-maker)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Uma biblioteca robusta para gerar PDFs a partir de conteúdo web (HTML, URL, Handlebars) de forma programática, utilizando o poder do Puppeteer.

## ✨ Tecnologias

- **TypeScript**: Para um código mais seguro e manutenível.
- **Puppeteer**: Para controle do browser e geração do PDF.
- **Handlebars**: Para geração de PDFs a partir de templates.
- **Jest**: Para garantir a qualidade e o funcionamento dos testes.
- **ESLint & Prettier**: Para manter o código limpo e padronizado.

## 📦 Instalação

Para instalar o pacote, utilize o seguinte comando:

```bash
npm install @hostaqui/pdf-maker
# ou
yarn add @hostaqui/pdf-maker
```

Se você for utilizar o `handler` de Handlebars, precisará instalar a dependência manualmente:

```bash
npm install handlebars
# ou
yarn add handlebars
```

## 🚀 Como Usar

A função principal da biblioteca é a `render`. Ela é flexível e permite gerar um PDF de diferentes fontes.

### Gerando PDF a partir de um HTML

Você pode fornecer o conteúdo HTML diretamente como uma string.

```typescript
import { render } from '@hostaqui/pdf-maker';
import { writeFileSync } from 'fs';

async function generatePdfFromHtml() {
  const htmlContent =
    '<h1>Olá, Mundo!</h1><p>Este é um PDF gerado a partir de um HTML.</p>';

  const pdfBuffer = await render({
    handler: 'html',
    options: {
      content: htmlContent,
      // Opcional: passe as opções do Puppeteer aqui
      pdf: {
        format: 'A4',
        printBackground: true,
      },
    },
  });

  writeFileSync('meu-pdf.pdf', pdfBuffer);
}

generatePdfFromHtml();
```

### Gerando PDF a partir de uma URL

Basta fornecer a URL da página que você deseja converter para PDF.

```typescript
import { render } from '@hostaqui/pdf-maker';
import { writeFileSync } from 'fs';

async function generatePdfFromUrl() {
  const pdfBuffer = await render({
    handler: 'url',
    options: {
      url: 'https://google.com',
      // Opcional: passe as opções do Puppeteer aqui
      pdf: {
        landscape: true,
      },
    },
  });

  writeFileSync('meu-pdf-da-url.pdf', pdfBuffer);
}

generatePdfFromUrl();
```

### Gerando PDF a partir de um template Handlebars

Você pode usar templates Handlebars para gerar PDFs dinâmicos.

```typescript
import { render } from '@hostaqui/pdf-maker';
import { writeFileSync } from 'fs';

async function generatePdfFromHandlebars() {
  const template =
    '<h1>Olá, {{nome}}!</h1><p>Seu pedido de número {{pedidoId}} foi confirmado.</p>';
  const data = {
    nome: 'Gabriel',
    pedidoId: '12345',
  };

  const pdfBuffer = await render({
    handler: 'handlebars',
    options: {
      content: template,
      data: data,
      // Opcional: passe as opções do Puppeteer aqui
      pdf: {
        format: 'Letter',
      },
    },
  });

  writeFileSync('meu-pdf-dinamico.pdf', pdfBuffer);
}

generatePdfFromHandlebars();
```

## ⚙️ API de Métodos

### `render(options: RenderOptions): Promise<Buffer>`

Esta é a função principal e exportada. Ela recebe um objeto de opções e retorna uma `Promise` que resolve com o `Buffer` do PDF gerado.

#### `RenderOptions`

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Siga os passos abaixo para contribuir:

1.  **Fork este repositório:** Crie uma cópia do projeto na sua conta do GitHub.
2.  **Clone o seu fork:** `git clone https://github.com/hostaqui/pdf.maker.git`
3.  **Crie uma branch para sua feature:** `git checkout -b minha-nova-feature`
4.  **Instale as dependências:** `npm install`
5.  **Faça suas alterações:** Implemente sua nova funcionalidade ou correção.
6.  **Execute os testes:** `npm run test`
7.  **Faça o commit das suas alterações:** Utilize o padrão de [Conventional Commits](https://www.conventionalcommits.org/). Ex: `feat: Adiciona suporte para EJS` ou `fix: Corrige problema de renderização de imagens`.
8.  **Envie para a sua branch:** `git push origin minha-nova-feature`
9.  **Abra um Pull Request:** Crie um Pull Request para a branch `main` do repositório original.

## 📜 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Créditos

Este projeto é mantido pela [HOSTAQUI](https://github.com/HOSTAQUI) e foi desenvolvido por [Gabriel Hijazi](https://github.com/gabrielhijazi).
