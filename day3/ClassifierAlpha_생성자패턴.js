function isFactor(alpha, potentialFactor){
    return alpha % potentialFactor === 0;
}

let ClassifierAlpha = function(number){
    this.number = number;
    this.isFactor = function(potentialFactor) {
        return this.number % potentialFactor == 0;
    }
    this.factors = function() {
        let factorSet = [];
        for (let pod = 1; pod <= Math.sqrt(this.number); pod++ ) {
            if (this.isFactor(pod)) {
                factorSet.push(pod);
                factorSet.push(this.number / pod);
            }
        }
        return factorSet;
    }

    this.isPerfect = function() {
        let currentFactor = this.factors();
        return (this.sum(currentFactor) - this.number) == this.number 
    }

    this.isAbundant= function() {
        let currentFactor = this.factors();
        return (this.sum(currentFactor) - this.number) > this.number 
    }

    this.isDeficient= function() {
        let currentFactor = this.factors();
        return (this.sum(currentFactor) - this.number) < this.number 
    }

    this.sum = function(factors) {
        let total = 0;
        factors.forEach( function(factor) {
            total += factor;
        });
        return total;
    }
}

let alpha1 = new ClassifierAlpha(10);
let alpha2 = new ClassifierAlpha(6);
let alpha3 = new ClassifierAlpha();

console.log(alpha1.isPerfect());
console.log(alpha2.isPerfect());
console.log(alpha3.isPerfect());