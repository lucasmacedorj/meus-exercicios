# central-ordens — projeto de treino

Uma API **fictícia** de ordens de serviço para manutenção de equipamentos
industriais (bombas, compressores etc.). Nada aqui é de nenhum cliente real —
é um projeto inventado só para você treinar a habilidade mais importante e mais
subestimada da profissão: **entender um código que você não escreveu**.

## ⚠️ Regra de ouro sobre confidencialidade (leia isto)

Você **pode** colar qualquer parte deste projeto no Claude à vontade — ele é
fictício e existe justamente para isso.

Você **nunca** deve colar, enviar ou subir código, dados, prints ou trechos do
**produto real de um cliente** em nenhuma ferramenta externa (Claude, ChatGPT,
sites, etc.). Isso é informação confidencial e sigilosa. Na dúvida sobre o que
pode ou não sair da empresa, **pergunte ao seu líder antes** — sempre.

Este projeto é o seu "campo de treino" seguro para praticar tudo que você faria
no código real, sem nenhum risco.

## O que é este código

É uma API pequena, mas organizada em camadas como um projeto de verdade:

```
src/
  index.ts            -> liga tudo: middlewares, rotas, banco
  config/             -> configuração (variáveis de ambiente, conexão com o banco)
  middleware/         -> código que roda em toda requisição (log, autenticação, erros)
  routes/             -> as URLs da API (o que responde a cada requisição)
  services/           -> as regras de negócio (o "cérebro")
  repositories/       -> a única camada que fala com o banco de dados
  domain/             -> os tipos/formatos dos dados e os erros
scripts/seed.ts       -> popula o banco com dados de exemplo
```

A ideia de separar em camadas é: cada arquivo tem UMA responsabilidade, e para
entender um fluxo você precisa "viajar" por vários deles. Aprender a fazer essa
viagem é o objetivo.

## Como rodar (opcional, mas recomendado)

Você precisa do **Bun** e de um **MongoDB** rodando (local ou no MongoDB Atlas,
que tem plano gratuito). Se travar em qualquer passo, peça ajuda ao Claude.

1. `bun install`
2. Copie `.env.example` para `.env` e preencha os valores.
3. `bun run seed`  (cria dados de exemplo)
4. `bun run dev`   (sobe o servidor)
5. Teste no Bruno/Insomnia. Lembre de mandar o header `x-api-key` com o valor
   que você pôs no `.env`, senão a API responde 401.

## O exercício (é isto que você entrega)

Faça sem pressa. O objetivo não é "terminar", é **entender**.

**Parte 1 — Rastrear um fluxo.**
Quando alguém faz um `POST /api/ordens` para criar uma ordem, o que acontece,
arquivo por arquivo, até a resposta voltar? Comece pelo `index.ts` e siga o
caminho. Escreva num parágrafo, com suas palavras, a sequência (qual arquivo
chama qual, e por quê).

**Parte 2 — Explicar por conta própria.**
Escolha OUTRO fluxo (ex.: listar ordens por status, ou concluir uma ordem) e
explique da mesma forma.

**Parte 3 — Investigação.**
Um usuário reclama: *"quando a ordem já está EM ANDAMENTO, eu não consigo
concluí-la — o sistema recusa."* Sem que ninguém te diga onde, encontre no
código o lugar que decide esse comportamento e explique **por que** isso
acontece. (Dica: comece pensando em qual camada mora esse tipo de regra.)

## Como usar o Claude neste exercício

O Claude é seu professor aqui — mas quem entende tem que ser você. Bons pedidos:

- "Me explique o que este arquivo faz, em palavras simples: [cole o arquivo]"
- "Neste projeto, o que acontece passo a passo quando chega um POST em /api/ordens? Não invente — baseie-se no código que eu colar."
- "Sou iniciante. O que é um 'middleware' e o que este aqui está fazendo?"
- "Se uma mudança de status de ordem estivesse se comportando de forma errada, em qual camada eu deveria procurar primeiro, e por quê?"

E o mais importante, sempre:

> Depois que o Claude explicar, **confira lendo o código você mesmo**. Se a
> explicação dele não bate com o que você lê, desconfie — e pergunte de novo.
> Se você não consegue explicar o fluxo sem olhar a resposta dele, você ainda
> não entendeu. Volte e leia mais uma vez.
