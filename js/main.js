import ui from "./ui.js";
import api from "./api.js";

const buttonCancelar = document.getElementById("botao-cancelar");

buttonCancelar.addEventListener("click", () => {
    document.getElementById("pensamento-conteudo").value = "";
    document.getElementById("pensamento-autoria").value = "";
    console.log("funcionou");
});

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();

    const formularioPensamento = document.getElementById("pensamento-form");

    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;

    try {
        if(id){
            await api.atualizarPensamento({id, conteudo, autoria});

            document.getElementById("pensamento-conteudo").value = "";
            document.getElementById("pensamento-autoria").value = "";
            document.getElementById("pensamento-id").value = "";

            await ui.renderizarPensamentos();
        }else{
            await api.salvarPensamento({conteudo, autoria})

            document.getElementById("pensamento-conteudo").value = "";
            document.getElementById("pensamento-autoria").value = "";
            document.getElementById("pensamento-id").value = "";

            await ui.renderizarPensamentos();
        }

    }catch (error){
        alert("Erro ao salvar o pensamento");
        throw error;
    }
}
