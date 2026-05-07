<div align="center">

# 🧠 Memoteca

<!-- Badges Core -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)

<!-- Badges Layout (Fornecido) -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

O **Memoteca** é uma aplicação web criada para ser um mural de pensamentos, citações e ideias. O diferencial deste projeto é o seu foco exclusivo no desenvolvimento lógico: **toda a estrutura visual (HTML e CSS) já estava pronta**.

O principal objetivo deste laboratório de estudos foi praticar intensamente o **JavaScript Vanilla**, focando na simulação do consumo de endpoints de uma API RESTful, manipulação avançada da DOM, modularização de código e tratamento de requisições assíncronas utilizando a `Fetch API`.

</div>

<br>

> [!WARNING]
> 🚧 **Projeto de estudo e prática de consumo de APIs** 🚧

---

## 🛠️ Tecnologias e Foco de Estudo

Embora o projeto contenha arquivos HTML e CSS, o coração dele está na pasta `js/` e `backend/`.

* **JavaScript (Vanilla JS):**
    * Uso de requisições HTTP assíncronas (`fetch`, `async` e `await`).
    * Desestruturação e manipulação de objetos e arrays em formato JSON.
    * Captura e manipulação de eventos na **DOM** para atualizar a interface sem recarregar a página.
    * Modularização de código separando responsabilidades (`api.js`, `ui.js`, `main.js`).
* **Node.js & JSON Server:** Utilizados na pasta `backend` para rodar um servidor local que cria uma API Fake (Mock) baseada no arquivo `db.json`, permitindo realizar operações de CRUD reais.

---

## ⚙️ Funcionalidades Desenvolvidas via JS

Apesar de ser uma interface simples, as seguintes operações lógicas foram totalmente integradas usando JavaScript:

- [x] **Listagem (`GET`):** Consome a lista de pensamentos salvos no `db.json` e os injeta dinamicamente na tela.
- [x] **Criação (`POST`):** Captura os dados do formulário e envia para a API salvar um novo pensamento.
- [x] **Edição (`PUT`):** Permite alterar o conteúdo ou autoria de uma citação já existente.
- [x] **Exclusão (`DELETE`):** Remove a citação do mural e do banco de dados (mock) simultaneamente.
- [x] **Tratamento de Erros:** Validações simples e feedback caso o servidor não responda.


## ▶️ Como Executar o Projeto

Como este projeto consome uma API simulada, você precisará rodar um servidor de backend (JSON Server) antes de abrir a página web.

### Pré-requisitos
* **Node.js** instalado na sua máquina (necessário para rodar o pacote json-server).

### Passo a passo

1. **Clone o repositório:**
```bash
git clone https://github.com/brunoverly/memoteca.git
cd memoteca
```

2. **Inicie a API Fake (Backend):**
   Acesse a pasta do backend, instale as dependências e rode o JSON Server para expor o `db.json`.
```bash
cd backend
npm install
npm run start
```
*(O JSON Server subirá um endpoint local na porta padrão, geralmente `http://localhost:3000/pensamentos`)*.

3. **Inicie o Frontend:**
   Mantenha o terminal do backend rodando e abra outro terminal. Você precisará de um servidor local para abrir o arquivo HTML (por questões de CORS no Fetch API).
   A maneira mais fácil é usar a extensão **Live Server** do VS Code:
* Vá para a raiz do projeto.
* Clique com o botão direito no `index.html`.
* Selecione **"Open with Live Server"**.

Pronto! A aplicação abrirá no navegador e já estará consumindo os dados diretamente da sua API fake.

---