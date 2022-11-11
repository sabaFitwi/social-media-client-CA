[![Automated E2E Testing](https://github.com/sabaFitwi/social-media-clientCA/actions/workflows/e2e.yml/badge.svg)](https://github.com/sabaFitwi/social-media-clientCA/actions/workflows/e2e.yml)[![Automated Unit Testing](https://github.com/sabaFitwi/social-media-clientCA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/sabaFitwi/social-media-clientCA/actions/workflows/unit-test.yml)

# Workflow Course Assignment

## Goal of the project
To improve the quality of an existing environment by establishing useful workflows that make the development process more efficient.

## Table of Contents
* [General Info](#general-information)
* [Project Requirments](#project-requirments)
* [Setup](#setup)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)



## General Information
In order to complete this task, I had to select an existing JavaScript project that has:

- API calls to CRUD an item
- API call to authenticate a user
- Project that does not belong to me (the teachers project)


## Project Requirments 

The following workflows/hooks were required:
- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Project is configured to run Jest on commit
- Project is configured to deploy to pages on merge to default

The following file changes are required:
- Project readme file is updated to include new configuration information and status badges
- Project is configured for hosting (e.g. CDN links or a Bundler)

The following features must be automatically tested with unit tests:
- The login function returns a valid token when provided with valid credentials
- The logout function clears the token from browser storage
- The create item function creates a new item on the API

The following features must be automatically tested with end-to-end tests:
- The login form validates user inputs correctly based on API restrictions
- The create item form validates user inputs correctly based on API restrictions
- The logout button logs the user out when clicked

## Setup
To start the setup process first download/ clone the repo  to your destination folder and open this file in your editor and initialise a new Git repository 

`git init`

Install dependencies

`npm i`

Build CSS files from SASS

`npm run build`

### Configuring formatter

Install prettier as dev dependency

`npm install --save-dev prettier`

Install ESLint as a dev dependency

`npm install eslint --save-dev `

Setting up ESLint

`npx eslint --init`

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON 
```

Add lint to package file

```
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint-fix": "eslint src/**/*.js --cache --fix"
},
```
Creating pre-commit hooks

`npx mrm@2 lint-staged`

Add lint-stage to package file

```"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
  ``` 


 Add settings for VSC, .vscode/settings.json


```
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript"
    ],
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[javascript][javascriptreact][typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[json][jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[css][scss][less]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
}
```


### Unit Testing
Installing Jest

`npm i -D jest@29.2.0`

 update our test script within package.json

```
{
  "scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest"}
}
```
Install the eslint-plugin-jest package

`npm i -D eslint-plugin-jest`

Enable this plugin within our .eslintrc.json

```
{
  "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
```

Install and configure babel to work with jest

`npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4`

Create `babel.config.json` and Add 
 ```
 {
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

### End To End Test

Install Cypress

`npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1`

Update `eslint.config.json` with configuration data for linting Cypress tests

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
}
```
Add script to package.json

```
{
  "scripts": {
    "test": "npm run test-e2e",
    "test-e2e": "cypress open"}
}
```


## Project Status
Project is not a long run project therefore it will not continue. 


## Acknowledgements
- This project was helped with [Workflow CA 2022](https://www.youtube.com/watch?v=7gF_0WqeQW8) and [Workflow CA Testing](https://www.youtube.com/watch?v=Jwld2q9ydt4).

- Many thanks to Noroff 



