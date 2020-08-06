
# Blog  project
Little blog web app using [next.js](https://nextjs.org/docs/) and [GraphQL](https://graphql.org)


## Project initialization

1. Create **NextJs** project in `./my_app` using a "oneshot" `nodejs` docker container 
```bash
docker run -it -v "$(pwd):/app" -w="/app" --entrypoint /bin/bash node:latest -c 'npx create-next-app my_app'
```
2. Create a `docker-compose.yml` configuration to power our web app, see [run project section](#run-project)

## Run project
Please start containers one by one
> TODO : create custom entry_point to wait postgres container before starting graphql engine

- build web container (js) 
```bash
docker-compose build
```

- start postgres container
```bash
docker-compose up -d graph-back
```

- wait postgres to complete init process (check container's logs) : `database system is ready to accept connections`

```bash 
docker-compose logs -f graph-back
```

- start hazura (GraphQL)
```bash
docker-compose up -d graph-front
```

- when ready, [open Hasura web console](http://localhost:8080)

- start web container
```bash
docker-compose up -d web
```
- when ready, [open webapp](http://localhost:3000)

## Node Modules Dependencies List
### DB Handlers
- ApolloClient:^3.0.0
- Graphql:^15.3.0
### Scripts
- Next:^9.5.1   
- React:16.13.1
- ReactCopyToClipboard:^5.0.2
### Styles
- Bootstrap:^4.5.1
- ReactBootsrap:^1.3.0

## [Data Link](https://drive.google.com/file/d/1LB3vQiT9nS9Y2V0VLGbyHaZrkv-hfLXD/view?usp=sharing) to populate the database
Place it inside app folder

## TODO and notes
- [ ] volumes permissions in docker


