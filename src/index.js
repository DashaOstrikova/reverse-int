module.exports = function reverse (n) {
    let reverseN = String(Math.abs(n)).split('').reverse().join('');
    return Number(reverseN);
}