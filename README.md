# Teste para a AMMO

---

realizado pela Hevellyn Prates

## Intro

Nesse projeto temos as duas principais pastas: backend e frontend.

O Backend foi feito com Nest, um ótimo framework opinativo para trabalhar com o Node.js.

O Frontend foi feito com react+vite, utilizei tambem a Ant Designer como lib de estilização.

## RUN

**Requisitos**:
Para execultar os projetos é necessario que o no servidor tenha:

- O NodeJS na versão 18 ou superior
- Algum banco de dados rodando

**Instalação**: Para execultar o projeto, é necessario configurar as variávies de ambiente no arquivo `backend/.env` com a conexão do banco de dados e as variáveis de ambiente no arquivo `frontend/.env.local` com a URL do backend. Ambos projetos tem um arquivo para exemplo.

Depois basta execultar os comandos:

```bash
cd backend
npm install
npx prisma db push
npx primsa db seed
npm run start:dev
# backend no ar
# ...
cd ..
cd frontend
npm install
npm run dev
# frontend no ar
```
