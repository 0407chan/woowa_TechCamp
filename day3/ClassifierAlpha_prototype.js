let ClassifierAlpha = function (number) {
  this.number = number | 0;
};

ClassifierAlpha.prototype.isFactor = function (potentialFactor) {
  return this.number % potentialFactor === 0;
};

ClassifierAlpha.prototype.factors = function () {
  let factorSet = new Set();
  for (let pod = 1; pod <= Math.sqrt(this.number); pod++) {
    if (this.isFactor(pod)) {
      factorSet.add(pod);
      factorSet.add(this.number / pod);
    }
  }
  return Array.from(factorSet);
};
ClassifierAlpha.prototype.isPerfect = function () {
  let currentFactor = this.factors();
  return this.sum(currentFactor) - this.number === this.number;
};
ClassifierAlpha.prototype.isAbundant = function () {
  let currentFactor = this.factors();

  return this.sum(currentFactor) - this.number > this.number;
};
ClassifierAlpha.prototype.isDeficient = function () {
  let currentFactor = this.factors();
  return this.sum(currentFactor) - this.number < this.number;
};
ClassifierAlpha.prototype.isPrime = function () {
  let primeSet = [1, this.number];
  return this.number > 1 && this.equalSet(this.factors(), primeSet);
};

ClassifierAlpha.prototype.equalSet = function (aset, bset) {
  if (aset.length !== bset.length) return false;
  for (let a of aset)
    if (!bset.includes(a)) return false;
  return true;
};

ClassifierAlpha.prototype.check = function () {
  let res = "";
  if (this.isPerfect()) {
    res += "perfect, ";
  } else if (this.isDeficient()) {
    res += "deficient, ";
  } else if (this.isAbundant()) {
    res += "abundant, ";
  }

  if (this.isPrime()) {
    res += "prime";
  }

  return res;
};

ClassifierAlpha.prototype.sum = function (factors) {
  let total = 0;
  factors.forEach(function (factor) {
    total += factor;
  });
  return total;
};

for (let i = 0; i <= 10; i++) {
  let alpha = new ClassifierAlpha(i);
  console.log(i + " : " + alpha.check());
}
// let alpha1 = new ClassifierAlpha(10);
// let alpha2 = new ClassifierAlpha(6);
// let alpha3 = new ClassifierAlpha();

// console.log(alpha1.isPerfect());
// console.log(alpha2.isPerfect());
// console.log(alpha3.isPerfect());