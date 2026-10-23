/* Molde 1 -- sem categorias. Cada produto é um bloco; foto geral na capa, as outras ao clicar nela. */
(function () {
  var C = Core, vit = document.getElementById("vitrine-full");
  if (!C.L.produtos.length) { vit.innerHTML = '<p class="vazio">Nenhum produto disponível no momento.</p>'; return; }
  C.L.produtos.forEach(function (p) {
    var bloco = document.createElement("div");
    bloco.className = "card-bloco"; bloco.id = "prod-" + p.id;
    vit.appendChild(bloco);
    C.montarProduto(bloco, p, { miniaturas: "ao-clicar" });
  });
})();
