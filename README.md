## React Hooks Boilerplate with Live Reload & Styled Components

This boilerplate could help you start to play React Hooks APIs with Live Reload and Styled Component

### Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/Rajdeepc/react-hooks-boilerplate-styled-components.git
```
and install the dependencies
```
npm install
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.


### Installing

#### Lint & Build

```sh
npm run lint
npm run build
```

### Begin from scratch

#### Init project

Create a new directory then

```sh
npm init -y
```

#### Install dependencies
```sh
npm install react@latest react-dom@latest react-hot-loader
```

### Install development dependencies

#### Babel

```sh
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev
```

#### Webpack

```sh
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
```

#### ESLint Airbnb
```sh
npx install-peerdeps --dev eslint-config-airbnb
npm install babel-eslint --save-dev
```

#### Cross-env

```sh
npm install cross-env --save-dev
```

#### Styled-Components

```sh
npm install --save styled-components
```

### Set up

#### Babel config

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

### Running the tests
```
npm test
```


### Deployment

You can use netlify or free github.io for deployments


### Built With

* [react-hot-loader](https://github.com/gaearon/react-hot-loader) is now compatible with React Hooks APIs.
* [styled-components](https://github.com/styled-components/styled-components) is compatible with React Hooks


### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 


### License

This project is licensed under the GPL License - see the [LICENSE.md](LICENSE.md) file for details

