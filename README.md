<h1 align="center">
  React Error Boundary Demo
</h1>

<p align="center">Demo built with React and TypeScrirpt to demonstrate using error bound in react.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img
      src="https://img.shields.io/badge/License-MIT-blue.svg"
      alt="License MIT"
    >
  </a>
</p>

<p>
  É crucial que seu aplicativo lide com erros fornecendo feedback visual adequado e ações potenciais, como mecanismos de repetição.

  Como fazemos isso?

  A API React oferece o mecanismo de <b>limites de erro</b> para capturar todos os tipos de erros que podem <b>“explodir”</b> dentro de um componente.

  <div align="center" style="margin-top:-1.5rem;margin-bottom: -2rem;">
    <img
      src="public/react-error-boundary.jpg"
      alt="Buber Breakfast"
      title="React-errors-bubbling"
    />
  </div>

  Por exemplo, se `<ComponentA />` acima estiver envolvido em um limite <b>React Error</b>, a propagação do erro irá parar no nível <b>Error Boundary</b>, evitando que o React App falhe:

  No entanto, essas implementações simples e nativas de Limites de Erro têm limitações. Primeiro, de acordo com a documentação do React, os limites de erro não capturam erros para:

  * Manipuladores de eventos
  * Código assíncrono (por exemplo, callbacks setTimeout ou requestAnimationFrame)
  * Renderização do lado do servidor
  * Erros lançados no próprio limite de erro (em vez de seus filhos)

  <b>
    Então como capturar todos os tipos de erros?
  </b>

  Utilizando a biblioteca `react-error-boundary`. Ela detecta corretamente todos tipos de erros e fornece um mecanismo de repetição.

  Para entender como implementá-la, veja o código.
</p>

## :hammer: Tecnologias

Este demo foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript

## 🚀 Execute o projeto

1. Clone este repositório `git clone https://github.com/dudunog/react-error-boundary-demo.git`
2. Entre no diretório do projeto `cd react-error-boundary-demo`
3. Instale as dependências com `yarn install` ou `npm install`
4. Inicie o projeto em modo desenvolvimento com `yarn run dev` ou `npm run dev`
