function seleksiNilai(num1,num2,array){
  if(array.length <= 5){
    console.log("jumlah angka dalam array harus lebih dari 5")
  }else if(num1 >= num2){
    console.log("nilai awal harus lebih besar dari nilai akhir")
  } else if (array.length > 5){
    for(let i = 0; i < array.length; i++) {
      temp = array[i]
      if(temp >= num1 && temp <= num2) {
        let y = []
        y = [...y,temp]
        // console.log(temp)
        console.log(y)
      }else if (temp <= num1 && temp >= num2){
        console.log("angka tidak ditemukan")
      }
      
      }
      
    }
    
  }


seleksiNilai(2 ,6, [1, 2, 3, 4, 5, 6])