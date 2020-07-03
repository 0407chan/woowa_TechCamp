function equalSet(aset, bset) {
  if (aset.length !== bset.length) return false;
  for (let a of aset) if (!bset.includes(a)) return false;
  return true;
}

function isPrime(number) {
  let primeSet = [1, number];
  return number > 1 && equalSet(factors(number), primeSet);
}

function isFactor(number, potentialFactor) {
  return number % potentialFactor === 0;
}

function factors(number) {
  var factorSet = [];
  for (var pod = 1; pod <= Math.sqrt(number); pod++) {
    if (isFactor(pod)) {
      factorSet.push(pod);
      factorSet.push(number / pod);
    }
  }
  return factorSet;
}

let num1 = 10;
let num2 = 7;

console.log(isPrime(num1));
console.log(isPrime(num2));
