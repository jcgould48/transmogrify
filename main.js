const biggify = function(num) {
  return num + 9000;
}

const nasafy = function(num) {
  const arr = [];
  let currentNum = num
  while (currentNum > 0){
arr.push(currentNum);
  }
  arr.push("Blast off!");
  return arr;
}

const reversify = function(str) {
  return str.split('').reverse().join('');
  }


const titleify = function(str) {
  
}

const crazify = function(str) {
  
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}