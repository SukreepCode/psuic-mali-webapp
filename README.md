
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Nest Cli

```bash
nest g module users
nest g controller users
nest g service users
nest g class users/users.entity
```

## Migration

Use this feature for production
when `"synchronize": false`. 

Mirgration stores the procedure to change the DB stucture

```bash
npm run typeorm -- [COMMAND]

# Genarate the change of DB stucture
npm run typeorm -- migration:generate -n [Name_of_Migration]

# Create an empty migration
npm run typeorm -- migration:create -n [Name_of_Migration]

# Execute all migration 
npm run typeorm -- migration:run

# Revert all migration 
npm run typeorm -- migration:revert
```



https://dev.to/nestjs/authentication-and-sessions-for-mvc-apps-with-nestjs-55a4
https://www.freecodecamp.org/news/express-js-security-tips/
