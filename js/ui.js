import api from "./api.js";

const ui = {
    async preencherFomulario(pensamentoId){
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;

    },

    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos")

        try{
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(pensamento => ui.adicionaPensamentoNaLista(pensamento));
        }catch(error) {
            alert('Erro ao renderizar o pensamento');
            throw error;
        }
    },
    adicionaPensamentoNaLista(pensamento){
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", "pensamento.id");
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "aspas-azuis";
        iconeAspas.classList.add("icone-aspas");


        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");

        botaoEditar.addEventListener("click", () => {
           ui.preencherFomulario(pensamento.id)
        });

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);

        const icones = document.createElement("div");
        botaoEditar.classList.add("icones");
        icones.appendChild(botaoEditar);




        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones);
        listaPensamentos.appendChild(li);

    }

}

export default ui;