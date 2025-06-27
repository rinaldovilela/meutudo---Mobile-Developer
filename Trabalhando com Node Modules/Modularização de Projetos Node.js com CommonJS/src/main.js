const carrinho = require("./services/product.js");

async function main() {
  console.log("carrinho de compras");
  carrinho.getFullName("123", "Produto Exemplo");
  carrinho.getFullName("456", "Outro Produto");
  carrinho.getFullName("789", "Mais um Produto");
}

main();
