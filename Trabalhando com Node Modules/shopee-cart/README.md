# 📝 Documentação do Projeto: Carrinho de Compras Shopee (DIO)

## 📌 Descrição do Projeto

Este projeto foi desenvolvido como exercício do bootcamp da Digital Innovation One (DIO), simulando um sistema de carrinho de compras e lista de desejos inspirado na Shopee. Ele demonstra conceitos fundamentais de JavaScript, manipulação de arquivos JSON e modularização de código.

**Principais funcionalidades:**

- ✅ Gerenciamento de itens no carrinho (adicionar, remover, atualizar quantidades)
- ✅ Lista de desejos (wishlist) sincronizada com o carrinho
- ✅ Cálculo automático do valor total
- ✅ Persistência dos dados em arquivo JSON
- ✅ Validação de tipos e quantidades de itens

## 🛠️ Estrutura do Projeto

```
shopee-cart/
├── db/
│   └── db.json            # Armazena os dados do carrinho e wishlist
├── src/
│   ├── services/
│   │   ├── cart.js        # Lógica do carrinho e wishlist
│   │   └── item.js        # Factory de itens com validação
│   └── index.js           # Ponto de entrada e demonstração
└── README.md              # Documentação do projeto
```

## 📚 Documentação das Funções

### 🛒 `cart.js`

#### `addItem(userCart, item)`

- **Descrição:** Adiciona um item ao carrinho ou incrementa sua quantidade se já existir
- **Parâmetros:**
  - `userCart`: Array do carrinho de compras
  - `item`: Objeto do item a ser adicionado
- **Exemplo de uso:**
  ```javascript
  await addItem(userCart, { name: "hotwheels", price: 20.99, quantity: 1 });
  ```

#### `removeItem(userCart, item)`

- **Descrição:** Remove uma quantidade específica de um item ou o item inteiro se a quantidade chegar a zero
- **Parâmetros:**
  - `userCart`: Array do carrinho
  - `item`: Objeto do item com a quantidade a ser removida

#### `calculateTotal(userCart)`

- **Descrição:** Calcula o valor total do carrinho
- **Retorna:** Valor total (number)
- **Exemplo de saída:**
  ```
  Total: $62.96
  ```

#### `displayCart(userCart)`

- **Descrição:** Exibe os itens do carrinho formatados
- **Exemplo de saída:**
  ```
  Itens no carrinho:
  - hotwheels ferrari (R$20.99 x 1)
  ```

#### `addToWishList(userWishlist, item, userCart)`

- **Descrição:** Adiciona item à lista de desejos mantendo a quantidade atual do carrinho
- **Parâmetros:**
  - `userWishlist`: Array da lista de desejos
  - `item`: Objeto do item
  - `userCart`: Array do carrinho (para sincronizar quantidades)

### 📦 `item.js`

#### `createItem(name, price, quantity)`

- **Descrição:** Factory function que cria itens com validação de tipos
- **Validações:**
  - Nome deve ser string
  - Preço deve ser número
  - Quantidade deve ser número positivo
- **Retorna:** Objeto do item ou lança erro se validação falhar
- **Exemplo:**
  ```javascript
  const item = await createItem("hotwheels", 20.99, 1);
  ```

## 📋 Como Executar

1. Clone o repositório
2. Instale o Node.js (versão 14 ou superior)
3. Execute o projeto:
   ```bash
   node src/index.js
   ```

## 📊 Fluxo de Demonstração

1. Inicializa o banco de dados (`db.json`)
2. Cria dois itens de exemplo:
   - hotwheels ferrari (R$20.99)
   - hotwheels lamborghini (R$39.99)
3. Adiciona os itens ao carrinho e à wishlist
4. Remove um item do carrinho e da wishlist
5. Exibe o carrinho atualizado e calcula o total

## 📄 Descrição para Entrega (DIO)

**Projeto:** Sistema de Carrinho de Compras Shopee

**Objetivo:** Demonstrar competências em JavaScript, manipulação de arquivos e modularização de código, desenvolvendo um sistema de carrinho de compras com lista de desejos integrada.

**Tecnologias Utilizadas:**

- JavaScript ES6+
- Node.js File System (FS)
- Módulos ECMAScript

**Principais Aprendizados:**

- Implementação de funções assíncronas
- Validação de tipos e regras de negócio
- Persistência de dados em arquivo JSON
- Manipulação de arrays (find, filter, reduce)
- Modularização de código em funções especializadas

**Como Executar:** Basta ter Node.js instalado e executar `node src/index.js` no terminal.

**Observações:** Este projeto foi desenvolvido como parte do bootcamp da DIO, com o propósito de praticar conceitos fundamentais de JavaScript em um contexto prático e relevante para e-commerce.
