
# Didomi Nodejs backend challenge.

[Didomi Challenge](https://github.com/didomi/challenges/blob/master/backend/README.md)

## Installation

### Local Installation

- Ensure you have an instance of postgres running locally.

- Subsutitue the env variables.

```
APP_ENV = DEVELOPMENT

PORT = 8081

HOST = http://localhost

BASE_URL = ${HOST}:${PORT}

PG_HOST=postgres-db
PG_USER=postgres
PG_DATABASE=local_test
PG_PASSWORD=postgres

PG_PORT=5432

PGADMIN_DEFAULT_EMAIL=postgres@mail.com
PGADMIN_DEFAULT_PASSWORD=admin12
PGADMIN_LISTEN_PORT=80

```

- run `npm i`

### Docker Installation
- Ensure you have docker running on your local machine.
- run `docker-compose build`
- run ` docker-compose up`
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
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Jude Okafor](https://github.com/judeokafor)
