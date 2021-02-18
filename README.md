# SeVegan: [LINK](https://sevegan.xyz)
## Pequeno projeto para ajudar a comunidade vegan:

Este projeto consiste em um pequeno website que expoe todos os E-números, e nos diz quais são vegan.
> Aqueles pequenos números (Exxx) que vem no rótulo do produtos.

Pensei em criar este projeto pois nao encontro nenhum website disponivel na internet onde tenha esta informação disponível de forma facilitada.

Neste projeto utilizei as seguintes ferramentas:

```
Back-end:
  Nodejs
  Express
  PostreSQL (base de dados)
Front-end:
  EJS
  SASS
DevOps:
  Docker
  Nginx
```

O website tem implementado um pequeno sistema de search feito em javascript. Para facilitar a procura de um E-número específico.

### Quem quiser rodar no seu proprio computador é so:

basta instalar o [docker](https://docs.docker.com/engine/install/) e [docker-compose](https://docs.docker.com/compose/install/) e executar o comando, dentro da pasta:

``
docker-compose up -d
``

e aceder a: ``http://localhost:8080``

### Proximas implementações:

- [ ] Novo feature em que o utilizador procura por produtos vegan de cada hipermercado.