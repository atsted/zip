export const log = (message, input, output) => {
  input = input.toString()
  output = output.toString()
  console.log(message)
  console.log('Input: ', input)
  console.log('Output: ', output)
  console.log('Coeff: ', (input.length / output.length).toFixed(2))
  console.log()
}
