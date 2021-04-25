# Node Express Boilerplate

# Features
- [TypeScript][typescript] [4.2][typescript-4-2] - type checking
- [Express][express] - nodejs web server
- [Jest][jest] - unit testing and code coverage
- [ESLint][eslint] - code linting
- [Prettier][prettier] - code formatting

# Existing project
- clone repository
- run `npm install`
- run `npm run dev` for development
- build production version by running `npm run build`

# Folders structure
```
.
├─── build      : built app (do not push to source control)
├─── logs       : app log files (do not push to source control)
├─── public     : static files
└─── src        : source files
```

# Tasks
```
npm start             : start production built app
npm run clean         : clean dist folder
npm run lint          : run linter
npm run dev           : start development
npm run build         : build for production
npm test              : run unit tests
npm run check:all     : run 'lint' and 'test' tasks
npm run hooks:install : install git hooks
```

[typescript]: https://www.typescriptlang.org/
[typescript-4-2]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[express]: https://expressjs.com/