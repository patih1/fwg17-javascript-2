function seleksiNilai(num1,num2,array){
  if(array.length <= 5){
    return console.log("jumlah angka dalam array harus lebih dari 5")
  }else if(num1 >= num2){
    return console.log("nilai awal harus lebih besar dari nilai akhir")
  } else if (array.length > 5){
    let y = []
    for(let i = 0; i < array.length; i++) {
      temp = array[i]
      if(temp >= num1 && temp <= num2) {
        
        y = [...y,temp]
        // console.log(temp)
       }
    }
      for(let j = 0; j < y.length; j++){
        for(let k = 0; k < y.length - j - 1; k++){
          let x = y[k]
          if(y[k] > y[k+1]) {
            y[k] = y[k+1]
            y[k+1] = x
          }
        }
      }
      if(y.length == 0 ) {
        return console.log('nilai tidak ditemukan')
      } else {
        return console.log(y)
      }
      
    }  
  }


seleksiNilai(1 ,3,  [1, 2, 3, 4, 5, 6])



function seleksiNilai(num1,num2,array){
  const result = []
  if(array.length <= 5){
    return console.log("jumlah angka dalam array harus lebih dari 5")
  }else if(num1 >= num2){
    return console.log("nilai awal harus lebih besar dari nilai akhir")
  }else if (array.length > 5){
    array.forEach(function(value){
      if(value >= num1 && value <= num2){
        result.push(value)
      }
    })
  }
  if(result.length == 0){
    return console.log('nilai tidak ditemukan')
  } else {
    result.sort((a,b)=>a-b)
    return console.log(result)
  }
}


