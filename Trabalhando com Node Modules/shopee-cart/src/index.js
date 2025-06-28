import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";
import fs from "fs";
import path from "path";

// Caminho para o arquivo db.json
const dbPath = path.resolve("./db/db.json");

// Função para carregar o banco de dados
const loadDB = () => {
  try {
    // Verifica se o diretório existe
    if (!fs.existsSync(path.dirname(dbPath))) {
      fs.mkdirSync(path.dirname(dbPath), { recursive: true }); // Cria o diretório db se não existir
    }

    // Se o arquivo não existir, cria um arquivo inicial
    if (!fs.existsSync(dbPath)) {
      const initialData = { userCart: [], userWishlist: [] };
      fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), "utf-8");
      console.log("Banco de dados criado com sucesso!");
      return initialData;
    }

    // Se o arquivo existir, lê os dados
    const data = fs.readFileSync(dbPath, "utf-8");
    console.log("Banco de dados carregado com sucesso!");
    return JSON.parse(data);
  } catch (err) {
    console.error("Erro ao carregar o banco de dados:", err);
    return { userCart: [], userWishlist: [] };
  }
};

// Função para salvar os dados no banco de dados
const saveDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
    console.log("Banco de dados salvo com sucesso!");
  } catch (err) {
    console.error("Erro ao salvar o banco de dados:", err);
  }
};

// Carregando dados do arquivo
let { userCart, userWishlist } = loadDB();

console.log("Bem-vindo ao seu carrinho da Shopee!");

// Exibindo carrinho e lista de desejos iniciais
console.log("Carrinho inicial:", userCart);
console.log("Lista de desejos inicial:", userWishlist);

// Criando itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.removeFromWishList(userWishlist, item1);
await cartService.removeFromWishList(userWishlist, item2);

// Adicionando os itens ao carrinho
await cartService.addItem(userCart, item1);
await cartService.addItem(userCart, item2);

// Adicionando os itens aos favoritos
await cartService.addToWishList(userWishlist, item1, userCart);
await cartService.addToWishList(userWishlist, item2, userCart);

// Removendo item do carrinho
await cartService.removeItem(userCart, item2);

await cartService.addItem(userCart, item2);
await cartService.addItem(userCart, item2);

// Removendo item dos favoritos
await cartService.removeFromWishList(userWishlist, item2);

// Exibindo carrinho, lista de favoritos e calculando o total
await cartService.displayCart(userCart);
await cartService.calculateTotal(userCart);
await cartService.displayWishList(userWishlist);

saveDB({ userCart, userWishlist });
