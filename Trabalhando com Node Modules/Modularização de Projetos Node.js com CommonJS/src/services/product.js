async function getFullName(codeId, productName) {
  return codeId + "--" + productName;
}

MediaSourceHandle.exports = {
  getFullName,
};
