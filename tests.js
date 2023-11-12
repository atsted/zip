import {zip} from './zip.js'
import {log} from './helpers.js'

[
  {
    message: '50 random numbers',
    input: () => {
      const data = [];
      for (let i = 50; i; --i) {
        data.push(Math.round(300 * Math.random()))
      }
      return data
    }
  },
  {
    message: '100 random numbers',
    input: () => {
      const data = [];
      for (let i = 100; i; --i) {
        data.push(Math.round(300 * Math.random()))
      }
      return data
    }
  },
  {
    message: '500 random numbers',
    input: () => {
      const data = [];
      for (let i = 500; i; --i) {
        data.push(Math.round(300 * Math.random()))
      }
      return data
    }
  },
  {
    message: '1000 random numbers',
    input: () => {
      const data = [];
      for (let i = 1000; i; --i) {
        data.push(Math.round(300 * Math.random()))
      }
      return data
    }
  },
  {
    message: '1000 random single digit numbers',
    input: () => {
      const data = [];
      for (let i = 1000; i; --i) {
        data.push(Math.round(9 * Math.random()))
      }
      return data
    }
  },
  {
    message: '1000 random two-digit numbers',
    input: () => {
      const data = [];
      for (let i = 1000; i; --i) {
        data.push(10 + Math.round(89 * Math.random()))
      }
      return data
    }
  },
  {
    message: '1000 random three-digit numbers',
    input: () => {
      const data = [];
      for (let i = 1000; i; --i) {
        data.push(100 + Math.round(200 * Math.random()))
      }
      return data
    }
  },
  {
    message: 'all numbers appearing three times',
    input: () => {
      const data = [];
      for (let i = 1; i < 301; i++) {
        data.push(Array(3).fill(i))
      }
      return data.flat()
    }
  }
].forEach(({message, input}, testNumber) => {
  const data = input()
  log(`TEST #${testNumber}: ${message}`, data, zip(data))
})
