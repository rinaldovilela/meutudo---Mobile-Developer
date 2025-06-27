const fullName = require("./services/product.js");

async function main() {
  console.log("Olá, meu nome é system!");

  const result = fullName.getFullName("123", "Produto Exemplo");
  console.log(result);
}

main();
