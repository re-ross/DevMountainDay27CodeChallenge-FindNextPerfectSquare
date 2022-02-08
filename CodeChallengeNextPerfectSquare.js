function nextSquare(sq) {
  let number = Math.sqrt(sq);

  if (Math.round(number) === number) {
    return Math.pow(++number, 2);
  }
  return -1;
}

console.log(nextSquare(9));
console.log(nextSquare(289));
console.log(nextSquare(3000));
