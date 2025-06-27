async function getFullName(codeId, productName) {
  doBreakLine();
  console.log("producto: " + codeId + " -- " + productName);
}

async function getProductLabel(productName) {
  doBreakLine();
  console.log("product: " + productName);
}

//hidden function
async function doBreakLine() {
  console.log("\n");
}

module.exports = {
  getFullName,
  getProductLabel,
};
