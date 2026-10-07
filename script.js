const botao = document.getElementById("botaoTema");

botao.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {

        botao.textContent = "☀️ Modo claro";

    } else {

        botao.textContent = "🌙 Modo escuro";

    }

});

fetch("https://backend-cartao-355g.onrender.com/api/cartao")
  .then(resposta => {
    if (!resposta.ok) {
      throw new Error("Erro ao buscar dados do cartão");
    }
    return resposta.json();
  })
  .then(dados => {
    document.querySelector(".perfil h1").textContent = dados.nome;
    document.querySelector(".cargo").textContent = dados.profissao;
    document.querySelector(".descricao").textContent = dados.descricao;
  })
  .catch(erro => {
    console.error("Erro ao conectar com o backend:", erro);
  });
