import ComplexExpression from './index';

describe('sumMul',()=>{
    it('should return positive result',()=>{
        expect(ComplexExpression.sumMul(1,2,3)).toEqual(9)
    })

    it('should return negative result',()=>{
        expect(ComplexExpression.sumMul(1,-2,3)).toEqual(-3)
    })
})

describe('subMul',()=>{
    it('should return positive result',()=>{
        expect(ComplexExpression.subMul(2,1,3)).toEqual(3)
    })

    it('should return negative result',()=>{
        expect(ComplexExpression.subMul(1,2,3)).toEqual(-3)
    })
})