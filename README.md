# Node Express Boilerplate

# Features
- TypeScript
- ESLint
- Prettier
- Express

# Requirements
- NodeJS v6.0 or newer
- npm v3.3 or newer

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
