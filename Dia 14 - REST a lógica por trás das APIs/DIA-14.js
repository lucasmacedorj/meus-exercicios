/* O que é CRUD

CRUD é um acrônimo que representa as 4 operações básicas que você faz com qualquer tipo de dado:

Create (Criar)
Read (Ler)
Update (Atualizar)
Delete (Apagar) 


O que é REST

REST é um conjunto de convenções (um "padrão combinado") de como organizar as URLs e métodos HTTP de uma API, pra que ela fique previsível e fácil de entender, mesmo sem ler a documentação inteira.

A ideia central do REST é: cada URL representa um "recurso" (uma coisa, tipo "chamados", "usuários", "produtos"), e o método HTTP (que você já viu no Dia 12) é que diz qual ação você quer fazer com aquele recurso.

Juntando REST + CRUD: o exemplo de chamados de suporte

Vamos usar /chamados como nosso "recurso" (a URL base que representa a lista de chamados).

Juntando REST + CRUD: o exemplo de chamados de suporte

Vamos usar /chamados como nosso "recurso" (a URL base que representa a lista de chamados).

--------

CREATE (Criar) → POST

POST /chamados

Você envia os dados do novo chamado no corpo da requisição:

json
{
  "titulo": "Erro ao acessar o sistema",
  "prioridade": "Alta"
}

Resposta esperada: 201 Created (lembra do Dia 12?), junto com o chamado recém-criado, já com um id novo gerado pelo servidor.

----------


READ (Ler) → GET

Aqui tem duas variações, dependendo se você quer um chamado específico ou a lista toda:

Listar todos os chamados:

GET /chamados

Buscar um chamado específico (pelo ID):

GET /chamados/42

Resposta esperada: 200 OK, com os dados do(s) chamado(s). Se o ID não existir, 404 Not Found (lembra desse do Dia 12 também!).

--------

UPDATE (Atualizar) → PUT

PUT /chamados/42

Você especifica qual chamado (pelo ID, na própria URL) e envia os novos dados no corpo:

json
{
  "status": "Resolvido"
}

Resposta esperada: 200 OK, com o chamado já atualizado.

--------


DELETE (Apagar) → DELETE
DELETE /chamados/42

Só precisa do ID na URL — geralmente não precisa mandar corpo nenhum, já que você só está pedindo pra remover aquele registro específico.

Resposta esperada: 200 OK (ou às vezes 204 No Content, que significa "sucesso, mas não tenho nada a mais pra te devolver").

---------------

Exercício:

Desenhe no papel os endpoints de uma entidade do produto que você atende (ex:
usuários, pedidos). 

Entidade escolhida: CHAMADOS

1. Criar um novo registro
   Método: POST  URL: /chamado

2. Listar todos os registros
   Método: GET  URL: /chamados

3. Ver um registro específico
   Método: GET  URL: /chamados/33

4. Atualizar um registro
   Método: PUT  URL: /chamados/33

5. Apagar um registro
   Método: DELETE  URL: /chamados/33

*/ 

