const { getProductLabel } = require("./services/product.js");
const config = require("./services/config.js");
const database = require("./services/database.js");

async function main() {
  console.log("carrinho de compras");
  //   carrinho.getFullName("123", "Produto Exemplo");
  //   carrinho.getFullName("456", "Outro Produto");
  //   carrinho.getFullName("789", "Mais um Produto");
  getProductLabel("Produto Exemplo");
  getProductLabel("Outro Produto");
  getProductLabel("Mais um Produto");

  console.log(`Configuração:
    Versão: ${config.devArea.version}   
    Autor: ${config.devArea.author}
    Descrição: ${config.devArea.description}`);

  console.log("\n Dispositivo do cliente: " + config.client.device);

  database.connectToDatabase("meuBancoDeDados");
}

main();
