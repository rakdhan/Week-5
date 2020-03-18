function meleeRangedGrouping (str) {
  //split dari ','
  var eachPlayer = []
  var temp = ''
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === ',' || i === str.length) {
        eachPlayer.push(temp)
        temp = ''
    }
    else{
        temp += str[i]
    }      
  }

  //split dari '-'
  var finalSplit = []
  for (let p = 0; p < eachPlayer.length; p++) {
    var tampung = []
    var tempat = ''
    for (let t = 0; t < eachPlayer[p].length; t++) {
      if (eachPlayer[p][t] === '-') {
        tampung.push(tempat)
        tempat = ''
      }
      else{
        tempat += eachPlayer[p][t]
      }
    }
    tampung.push(tempat)
    finalSplit.push(tampung)
  }

  //susun output
  var Ranged = []
  var Melee = []
  var result = []
  let unknownType = []
  for (let k = 0; k < finalSplit.length; k++) {
    if (finalSplit[k][1] === 'Ranged') {
      Ranged.push(finalSplit[k][0])
    }
    else if (finalSplit[k][1] === 'Melee') {
      Melee.push(finalSplit[k][0])
    }
    else{
      unknownType.push(finalSplit[k][0])
    }
}
  result.push(Ranged, Melee, unknownType)
  if (unknownType.length === 0) {
    result.pop(unknownType)
  }

  //penuhi kondisi
  if (str === '' || str === undefined || str.length === 0) {
    return []
  }
  else if (str === Number(str)) {
    return 'Function will only accept input of string'
  }
  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping([])); // []