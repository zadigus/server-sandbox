# server-sandbox
This repository is meant to be used by the Softozor's team which is currently working on the realization of the Shopozor project. We test stuff that we might find useful for the end project. In this readme, we list up the things we found interesting (can be configuration, libraries, tools, etc.).

## Project configuration

### Stop bothering with relative paths when we import modules in Typescript

We could've seen 

```
import buildRequester from "../../externals/testing-helpers/src/ServerRequest/config/ConfigurationBuilder"
```

in the code written in [the BasicRequest step file](https://github.com/zadigus/server-sandbox/blob/master/spec/steps/BasicRequest.steps.ts). It ends up to now read like so

```
import buildRequester from "ServerRequest/config/ConfigurationBuilder"
```

Achieving this is not very easy, as we need to deal with transpiling our code to javascript and testing our code with Jest. The web is for example full of solutions that make it possible to transpile the code but then the modules aren't found in the test code anymore so that a simple 

```
npm run start
```

throws errors we don't care about in our tests. Here's the solution that we found suitable for our needs. Let's focus on including code from our external repository `testing-helpers` mentioned above, in particular its `ServerRequest` module. In order to be able to use it in production code (that is transpiled by tsc and transformed by webpack) as well as in test code, in such a way that e.g. VSCode doesn't complain that it doesn't find a module, we did the following:

* add the `modulePaths` entry to the `package.json` file: 

```
"jest": {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "**/*.steps.ts",
    "**/*.test.ts"
  ],
  "moduleFileExtensions": [
    "js",
    "ts"
  ],
  "testURL": "http://localhost",
  "modulePaths": [
    "externals/testing-helpers/src",
    "src"
  ]
},
```

In the above snippet, the `"externals/testing-helpers/src"` path is relevant for including the `ServerRequest` module. 

* add the `baseUrl` and `paths` entries to the `tsconfig.json` file:

```
"baseUrl": "src",
"paths": {
  "App/*": ["App/*"],
  "ServerRequest/*": ["../externals/testing-helpers/src/ServerRequest/*"]
}
```

In the above snippet, the `"ServerRequest/*": ["../externals/testing-helpers/src/ServerRequest/*"]` line is relevant to make the `ServerRequest` module available.

* would we need the `ServerRequest` module in the application's code, we would update the `resolve.alias` property of the `webpack.dev.js` file like so:

```
resolve: {
  extensions: ['.ts', '.js'],
  alias: {
    App: path.resolve(__dirname, 'src/App/'),
    ServerRequest: path.resolve(__dirname, 'externals/testing-helpers/src/ServerRequest/')
  }
},
```

That way, the built `dist/main.js` file from our typescript code would contain a correct reference to the `ServerRequest` module. 
