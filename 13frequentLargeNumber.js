function sorting(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    for (let k = i + 1; k < arrNumber.length; k++) {
      if (arrNumber[i] < arrNumber[k]) {
        let temp = arrNumber[i]
        arrNumber[i] = arrNumber[k]
        arrNumber[k] = temp
      }
    }      
  }
 
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var keyTerbesar = arrNumber[0];
  var berapa = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === keyTerbesar) {
      berapa++;
    }
    else if (arrNumber[i] === String(arrNumber[i])) {
      return 'functions will only accept input of number(s)'
    } 
  }
  if (arrNumber.length === 0 || arrNumber === undefined) {
    return "''"
  }
  return 'angka paling besar adalah ' + keyTerbesar + ' dan jumlah kemunculan sebanyak ' + berapa + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// // // //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// // // //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
// // //''