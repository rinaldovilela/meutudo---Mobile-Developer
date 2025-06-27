const carrinho = require("./services/product.js");
const config = require("./services/config.js");

async function main() {
  console.log("carrinho de compras");
  //   carrinho.getFullName("123", "Produto Exemplo");
  //   carrinho.getFullName("456", "Outro Produto");
  //   carrinho.getFullName("789", "Mais um Produto");
  //   carrinho.getProductLabel("Produto Exemplo");
  //   carrinho.getProductLabel("Outro Produto");
  //     carrinho.getProductLabel("Mais um Produto");
  console.log(`Configuração:
    Versão: ${config.version}   
    Autor: ${config.author}
    Descrição: ${config.description}`);

  console.log("\n Dispositivo do cliente: " + config.client.device);
}

main();
