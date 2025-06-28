async function addItem(userCart, item) {
  // Verificar se o item já existe no carrinho
  const existingItem = userCart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    // Se o item já existe, aumenta a quantidade
    existingItem.quantity += item.quantity;
    console.log(
      `Quantidade de ${item.name} aumentada para ${existingItem.quantity}.`
    );
  } else {
    // Caso contrário, adiciona o item ao carrinho
    userCart.push(item);
    console.log(`Item ${item.name} adicionado ao carrinho.`);
  }
}

async function calculateTotal(userCart) {
  const total = userCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log(`Total: $${total.toFixed(2)}`);
  return total;
}

async function deleteItem(userCart, itemName) {
  const itemIndex = userCart.findIndex((item) => item.name === itemName);
  if (itemIndex !== -1) {
    userCart.splice(itemIndex, 1);
    console.log(`Item ${itemName} deletado do carrinho.`);
  } else {
    console.log(`Item ${itemName} não encontrado no carrinho.`);
  }
}

async function removeItem(userCart, item) {
  const itemIndex = userCart.findIndex(
    (cartItem) => cartItem.name === item.name
  );

  if (itemIndex !== -1) {
    userCart[itemIndex].quantity -= item.quantity;

    // Verifica se a quantidade do item foi reduzida para 0 ou menos
    if (userCart[itemIndex].quantity <= 0) {
      // Remove o item completamente do carrinho
      userCart.splice(itemIndex, 1);
      console.log(`Item ${item.name} removido do carrinho.`);
    } else {
      console.log(
        `Quantidade de ${item.name} reduzida para ${userCart[itemIndex].quantity}.`
      );
    }
  } else {
    console.log(`Item ${item.name} não encontrado no carrinho.`);
  }
}

async function displayCart(userCart) {
  if (userCart.length === 0) {
    console.log("Seu carrinho está vazio.");
    return;
  }
  console.log("Itens no carrinho:");
  userCart.forEach((item) => {
    console.log(
      `- ${item.name} (R$${item.price.toFixed(2)} x ${item.quantity})`
    );
  });
}

async function displayWishList(userWishlist) {
  if (userWishlist.length === 0) {
    console.log("Sua lista de favorritos está vazia.");
    return;
  }
  console.log("Itens na lista de favoritos: ");
  userWishlist.forEach((item) => {
    console.log(
      ` - ${item.name} R$${item.price.toFixed(2)} x ${item.quantity}`
    );
  });
}

async function addToWishList(userWishlist, item, userCart) {
  const existingItemInWishlist = userWishlist.find(
    (wishlistItem) => wishlistItem.name === item.name
  );

  const itemInCart = userCart.find((cartItem) => cartItem.name === item.name);
  const quantityToUse = itemInCart ? itemInCart.quantity : item.quantity;

  if (existingItemInWishlist) {
    console.log(`${item.name} já está na lista de favoritos.`);
  } else {
    userWishlist.push({ ...item, quantity: quantityToUse });
    console.log(
      `Item ${item.name} adicionado à lista de favoritos com quantidade ${quantityToUse}.`
    );
  }
}

async function removeFromWishList(userWishlist, item) {
  const itemIndex = userWishlist.findIndex(
    (wishlistItem) => wishlistItem.name === item.name
  );
  if (itemIndex !== -1) {
    userWishlist.splice(itemIndex, 1);
    console.log(`Item ${item.name} removido da lista de favoritos.`);
  } else {
    console.log(`Item ${item.name} não encontrado na lista de favoritos.`);
  }
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
  addToWishList,
  removeFromWishList,
  displayWishList,
};
