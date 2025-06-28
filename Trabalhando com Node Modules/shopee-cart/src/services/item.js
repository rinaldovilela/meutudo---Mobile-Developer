async function createItem(name, price, quantity) {
  if (
    typeof name !== "string" ||
    typeof price !== "number" ||
    typeof quantity !== "number" ||
    quantity <= 0 // Verifica se a quantidade é um número não negativo ou zero.
  ) {
    throw new Error("Invalid input types");
  }
  return { name, price, quantity };
}

export default createItem;
