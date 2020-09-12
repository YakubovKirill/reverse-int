module.exports = function reverse (n) {
  return `${n}`.split('').filter(elem => elem !== '-').reverse().join('');
}
