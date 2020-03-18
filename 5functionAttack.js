function attack (damage) {
  // Code disini
  var temp = damage - 2
   
  return temp
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  if (damagePerAttack === String(damagePerAttack)) {
    return 'functions will only accept input of number(s)'
  } 
  var result = numberOfAttacks * attack(damagePerAttack)
  return result
}

// TEST CASE
console.log(damageCalculation(9, '25')); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
