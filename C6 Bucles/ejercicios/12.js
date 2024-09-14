function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 === 0 && num % 5 === 0 ) { 
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {(num % 3 === 0 )
    return "fizzBuzz";
  }
};
console.log(fizzBuzz(2))
console.log(fizzBuzz(4))
console.log(fizzBuzz(5))
console.log(fizzBuzz(3))
console.log(fizzBuzz(30))

module.exports = fizzBuzz;
