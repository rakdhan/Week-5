function changeVocals(str) {
  //code di sini
  var alp = 'abcdefghijklmnopqrstuvwxyz'
  var hasilVocal = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < alp.length; j++) {
      if (str[i] === alp[j]) {
        if (str[i] === 'u' || str[i] === 'o' || str[i] === 'a' || str[i] === 'e' || str[i] === 'i') {
          hasilVocal += alp[j+1]
        }
        else{
          hasilVocal += alp[j]
        }
      }
      else if (str[i] === alp[j].toUpperCase()) {
        if (str[i].toUpperCase() == 'I' || str[i].toUpperCase() == 'U' || str[i].toUpperCase() == 'O' || str[i].toUpperCase() == 'E' || str[i].toUpperCase() == 'A') {
          hasilVocal += alp[j+1].toUpperCase()
        }
        else{
          hasilVocal += alp[j].toUpperCase()
        }
      }     
    }
    if (str[i] <= '9' && str[i] >= '0'){
        console.log("Your input contain string(s) of number, it won't change the output but please eliminate it so that it look nicer. Here is your answer:")
    }
  }
  return hasilVocal
}

function reverseWord(str) {
  //code di sini
  var hasilReverse = ''
  for (let i = str.length - 1; i >= 0; i--) {
      hasilReverse += str[i]
  }
  return hasilReverse
}

function setLowerUpperCase(str) {
  //code di sini
  var bolakBalik = ''
  for (let i = 0; i < str.length; i++) {
    var upper = str[i].toUpperCase()
    var lower = str[i].toLowerCase()
    if (str[i] === upper) {
        bolakBalik += lower
    }
    else if (str[i] === lower) {
        bolakBalik += upper
    }
  }
  return bolakBalik
}

function removeSpaces(str) {
  //code di sini
  if (str.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var spaceDahilang = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      spaceDahilang += str[i]
    } 
  }
  return spaceDahilang
}

function passwordGenerator (abc) {
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(abc))))
}

console.log(passwordGenerator('Serge9i Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'