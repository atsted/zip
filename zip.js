/*
 * ASCII character subset. The greater the alphabet
 * capacity, the higher the compression ratio
 */
const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-{}[];:?|.`~"<>/\\\''

/*
 * An alphabet hash For faster decoding
 */
const ALPHABET_HASH = Object.fromEntries(Array.from(ALPHABET).map((e, i) => [e, i]))

/*
 * An alphabet capacity
 */
const SIZE = ALPHABET.length

/*
 * A serialization method based on occurrence count.
 * It works better on large amounts of data
 */
const zip1 = (arr) => {
  const r = []
  arr.forEach(e => {
    if (!r[e]) r[e] = 0; r[e]++
  })
  return r.toString()
}

/*
 * A serialization method based on encoding numbers
 * using a more compact notation
 */
const zip2 = (arr) => {
  const encode = (n) => {
    let d = Number(n)
    let c = ''
    while (d > 0) {
      c += ALPHABET[d % SIZE]
      d = Math.floor(d / SIZE)
    }
    return c ? c : ALPHABET[0]
  }
  return arr.map(encode).toString()
}

/*
 * A deserialization of the first method
 */
const unzip1 = (str) =>
  Array
    .from(str.split(',').map(Number), (v, k) => Array(v).fill(k))
    .flat()

/*
 * A deserialization of the second method
 */
const unzip2 = (str) => {
  const decode = (ch) =>
    Array
      .from(ch)
      .reverse()
      .reduce((r, c) => ALPHABET_HASH[c] + SIZE * r, 0)
  return str.split(',').map(decode)
}

/*
 * A combination of two serialization methods,
 * it selects the best result and marks it
 */
export const zip = (arr) => {
  const z1 = zip1(arr)
  const z2 = zip2(arr)
  return z1.length < z2.length ? `0${z1}` : `1${z2}`
}

/*
 * A deserialization of the combination of methods
 */
export const unzip = (str) => {
  return (+str[0] ? unzip2 : unzip1)(str.slice(1))
}
