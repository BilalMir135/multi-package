import BasicExpression from './index';

describe('sum',()=>{
    it('should return positive result',()=>{
        expect(BasicExpression.sum(1,2)).toEqual(3)
    })

    it('should return negative result',()=>{
        expect(BasicExpression.sum(1,-2)).toEqual(-1)
    })
})

describe('mul',()=>{
    it('should return positive result',()=>{
        expect(BasicExpression.mul(2,2)).toEqual(4)
    })

    it('should return negative result',()=>{
        expect(BasicExpression.mul(2,-2)).toEqual(-4)
    })
})