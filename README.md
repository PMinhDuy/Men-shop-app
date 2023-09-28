<p align="center">
  <a href="https://nextjs.org">
    <h1 align="center">Men shop web</h1>
  </a>
</p>

## Built With

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Ant Design](https://ant.design/)

## Getting Started

### Prerequisites

- Install node
  <https://nodejs.org/en/download/>

- Install yarn

  ```sh
  npm install --global pnpm
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/PMinhDuy/Men-shop-app.git
   ```

2. Install NPM packages

   ```sh
   pnpm install
   ```

3. Copy `.env.example` to `.env` and update the variables.

4. Run the development server:

   ```bash
   #npm run dev
   nvm use 17.0.1
   export NODE_OPTIONS=--openssl-legacy-provider; npm run dev
   # or
   pnpm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

##### Unit test

```
pnpm test
```

##### Integration test

```
pnpm run test-integration
```

##### e2e test

```
pnpm run test-e2e
```

## Documentations

- [Development style guides](docs/style-guide.md)

- [Project Structure](docs/folder-structure.md)
