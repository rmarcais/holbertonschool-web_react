# 0x07. React Immutable

<p align="center">
<img src="./meme.png" alt="meme">
</p>

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, **without the help of Google**:

- Immutable objects. Who, what, when, where, and why?
- How to use the Immutable.js library to bring immutability to Javascript
- The differences between List and Map
- How to use Merge, Concat, and Deep Merging
- What a lazy `Seq` is

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- A `README.md` file, at the root of the folder of the project, is mandatory
- All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node 16.x.x` and `npm 8.x.x`
- All of your files should end with a new line
- All of your functions must be exported

## Provided files

### `babel.config.js`
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### `jsconfig.json`
```
{
  "compilerOptions": {
    "target": "es6"
  },
  "exclude": [
    "node_modules"
  ]
}
```

### `package.json`
```
{
  "type": "module",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  },
  "dependencies": {
    "immutable": "^4.0.0-rc.12"
  }
}
```
