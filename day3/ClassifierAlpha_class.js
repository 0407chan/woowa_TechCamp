class ClassifierAlpha {

    constructor(number) {
        this.number = number;
    }    

    isFactor(potentialFactor) {
        return this.number % potentialFactor == 0;
    }

    factors() {
        var factorSet = [];
        for (var pod = 1; pod <= Math.sqrt(this.number); pod++ ) {
            if (this.isFactor(pod)) {
                factorSet.push(pod);
                factorSet.push(this.number / pod);
            }
        }
        return factorSet;
    }

    isPerfect() {
        var currentFactor = this.factors();
        return (this.sum(currentFactor) - this.number) == this.number 
    }

    isAbundant() {
        var currentFactor = this.factors();
        return (this.sum(currentFactor) - this.number) > this.number 
    }

    isDeficient() {
        var currentFactor = this.factors();
        return (this.sum(currentFactor) - this.number) < this.number 
    }

    sum(factors) {
        var total = 0;
        factors.forEach( function(factor) {
            total += factor;
        });
        return total;
    }
}

var alpha1 = new ClassifierAlpha(10);
var alpha2 = new ClassifierAlpha(6);
var alpha3 = new ClassifierAlpha();

console.log(alpha1.isPerfect());
console.log(alpha2.isPerfect());
console.log(alpha3.isPerfect());