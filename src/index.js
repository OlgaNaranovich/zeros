module.exports = function getZerosCount(number) {
  const zerosCount = Math.floor(number / 5) + Math.floor(number / 25) + Math.floor(number / 100) - 4;
  return zerosCount;
}
