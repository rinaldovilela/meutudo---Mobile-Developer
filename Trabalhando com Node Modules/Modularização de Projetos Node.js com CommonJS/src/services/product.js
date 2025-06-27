async function getFullName(codeId, productName) {
  return codeId + "--" + productName;
}

module.exports = {
  getFullName,
};
