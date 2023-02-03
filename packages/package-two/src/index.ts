import BasicExpression from '@bilalmir135/package-one'

function sumMul(num_a: number, num_b: number, num_c: number) {
  return BasicExpression.sum(num_a, num_b) * num_c
}

function subMul(num_a: number, num_b: number, num_c: number) {
  return BasicExpression.sub(num_a, num_b) * num_c
}

export default { sumMul, subMul }
