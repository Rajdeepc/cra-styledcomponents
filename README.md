# React Hooks Boilerplate with Live Reload & Styled Components

[react-hot-loader](https://github.com/gaearon/react-hot-loader) is now compatible with React Hooks APIs.
[styled-components](https://github.com/styled-components/styled-components) is compatible with React Hooks

This boilerplate could help you start to play React Hooks APIs with Live Reload and Styled Component

```sh
npm install
npm start
```

Check it out: http://localhost:8080

## Lint & Build

```sh
npm run lint
npm run build
```

# Begin from scratch

## Init project

Create a new directory then

```sh
npm init -y
```

## Install dependencies
```sh
npm install react@latest react-dom@latest react-hot-loader
```

## Install development dependencies

### Babel

```sh
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

### Webpack

```sh
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

### ESLint Airbnb
```sh
npx install-peerdeps --dev eslint-config-airbnb
npm install babel-eslint --save-dev
```

### Cross-env

```sh
npm install cross-env --save-dev
```

### Styled-Components

```sh
npm install --save styled-components
```

# Set up

## Babel config

```babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```
Enjoy!!!