module.exports = function main(str) {
  // Write your cade here
  let sum = 0;
  for(let index = 0; index < str.length; index++){
    sum += (str.charAt(index)-'0');
  }
  return sum;
};
