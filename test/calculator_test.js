const expect = require('chai').expect;
const calculator = require('../services/calculator');

describe('Calculator SUM Operations Tests', () => {
    describe('when sum() receives two positive numbers', () => {
        it('should be equal to 2', () => {
            const result = calculator.sum(1, 1);
            expect(result).to.equal(2);
        });

        it('should be equal to 15', () => {
            const result = calculator.sum(11, 4);
            expect(result).to.equal(15);
        });
    });

    describe('when sum() receives empty', () => {
        it('should be equal to 0', () => {
            const result = calculator.sum();
            expect(result).to.equal(0);
        });
    });

    describe('when sum() receives one number', () => {
        it('should be equal to 10', () => {
            const result = calculator.sum(10);
            expect(result).to.equal(10);
        });

        it('should be equal to 88', () => {
            const result = calculator.sum(88);
            expect(result).to.equal(88);
        });
    });

    describe('when sum() receives more than two numbers', () => {
        it('should be equal to 3', () => {
            const result = calculator.sum(1, 1, 1);
            expect(result).to.equal(3);
        });

        it('should be equal to 72', () => {
            const result = calculator.sum(5, 60, 2, 3, 1, 1);
            expect(result).to.equal(72);
        });
    });

    describe('when sum() receives two or more negative numbers', () => {
        it('should returns -2', () => {
            const result = calculator.sum(-1, -1);
            expect(result).to.equal(-2);
        });

        it('should returns -20', () => {
            const result = calculator.sum(-10, -9, -1);
            expect(result).to.equal(-20);
        });
    });

    describe('when sum() receives either negative or positive numbers', () => {
        it('should returns 0', () => {
            const result = calculator.sum(-1, 1);
            expect(result).to.equal(0);
        });

        it('should returns 36', () => {
            const result = calculator.sum(-1, 10, -50, 33, 28, 60, 10, -30, -4, -20);
            expect(result).to.equal(36);
        });
    });
});

describe('Calculator SUBTRACT Operations Tests', () => {
    describe('when subtract() receives two positive numbers', () => {
        it('should be equal to 16', () => {
            const result = calculator.subtract(30, 14);
            expect(result).to.equal(16);
        });

        it('should be equal to 15', () => {
            const result = calculator.subtract(19, 4);
            expect(result).to.equal(15);
        });
    });

    describe('when subtract() receives empty', () => {
        it('should be equal to 0', () => {
            const result = calculator.subtract();
            expect(result).to.equal(0);
        });
    });

    describe('when subtract() receives one number', () => {
        it('should be equal to 20', () => {
            const result = calculator.subtract(20);
            expect(result).to.equal(20);
        });

        it('should be equal to 8', () => {
            const result = calculator.subtract(8);
            expect(result).to.equal(8);
        });
    });

    describe('when subtract() receives more than two numbers', () => {
        it('should be equal to 12', () => {
            const result = calculator.subtract(48, 24, 12);
            expect(result).to.equal(12);
        });

        it('should be equal to -5', () => {
            const result = calculator.subtract(10, 10, 5);
            expect(result).to.equal(-5);
        });
    });

    describe('when subtract() receives two or more negative numbers', () => {
        it('should returns 0', () => {
            const result = calculator.subtract(-1, -1);
            expect(result).to.equal(0);
        });

        it('should returns -9', () => {
            const result = calculator.subtract(-10, 9, -10);
            expect(result).to.equal(-9);
        });
    });

    describe('when subtract() receives either negative or positive numbers', () => {
        it('should returns -30', () => {
            const result = calculator.subtract(-15, 15);
            expect(result).to.equal(-30);
        });

        it('should returns 41', () => {
            const result = calculator.subtract(5, -60, 25, -10, 9);
            expect(result).to.equal(41);
        });
    });
});

describe('Calculator MULTIPLY Operations Tests', () => {
    describe('when multiply receives two positive numbers', () => {
        it('should return 20', () => {
            const result = calculator.multiply(2, 10);
            expect(result).to.equal(20);
        });

        it('should return 1', () => {
            const result = calculator.multiply(1, 1);
            expect(result).to.equal(1);
        });
    });

    describe('when multiply receives two negative numbers', () => {
        it('should return 15', () => {
            const result = calculator.multiply(-3, -5);
            expect(result).to.equal(15);
        });

        it('should return 64', () => {
            const result = calculator.multiply(-8, -8);
            expect(result).to.equal(64);
        });
    });

    describe('when multiply receives no arguments', () => {
        it('should return 0', () => {
            const result = calculator.multiply();
            expect(result).to.equal(0);
        });
    });

    describe('when multiply receives more than two numbers', () => {
        it('should return 60', () => {
            const result = calculator.multiply(4, 5, 3);
            expect(result).to.equal(60);
        });
        
        it('should return -1000', () => {
            const result = calculator.multiply(-5, -5, -10, 4);
            expect(result).to.equal(-1000);
        });
    });
});