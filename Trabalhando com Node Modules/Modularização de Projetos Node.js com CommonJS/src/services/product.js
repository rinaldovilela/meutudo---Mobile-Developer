async function getFullName(codeId, productName) {
  console.log("\n");
  console.log("producto: " + codeId + " -- " + productName);
}

async function getProductLabel(productName) {
  console.log("\n");
  console.log("product: " + productName);
}

module.exports = {
  getFullName,
  getProductLabel,
};
