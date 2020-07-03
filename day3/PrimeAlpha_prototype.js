let PrimeAlpha = function (number) {
  this.number = number | 0;
};

PrimeAlpha.prototype.equalSet = function (aset, bset) {
  if (aset.length !== bset.length) return false;
  for (let a of aset) if (!bset.includes(a)) return false;
  return true;
};

PrimeAlpha.prototype.isPrime = function () {
  let primeSet = [1, this.number];
  return this.number > 1 && this.equalSet(this.factors(), primeSet);
};

PrimeAlpha.prototype.isFactor = function (potentialFactor) {
  return this.number % potentialFactor === 0;
};

PrimeAlpha.prototype.factors = function () {
  let factorSet = [];
  for (let pod = 1; pod <= Math.sqrt(this.number); pod++) {
    if (this.isFactor(pod)) {
      factorSet.push(pod);
      factorSet.push(this.number / pod);
    }
  }
  return factorSet;
};

const prime1 = new PrimeAlpha(10);
const prime2 = new PrimeAlpha(7);
const prime3 = new PrimeAlpha();

console.log(prime1.isPrime());
console.log(prime2.isPrime());
console.log(prime3.isPrime());
