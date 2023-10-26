function seleksiNilai(num1,num2,array){
  if(array.length <= 5){
    console.log("jumlah angka dalam array harus lebih dari 5")
  }else if(num1 >= num2){
    console.log("nilai awal harus lebih besar dari nilai akhir")
  } else if (array.length > 5){
    let y = []
    for(let i = 0; i < array.length; i++) {
      temp = array[i]
      if(temp > num1 && temp < num2) {
        
        y = [...y,temp]
        console.log(temp)
       
      }else if (temp <= num1 && temp >= num2){
        console.log("angka tidak ditemukan")
      } 
      }
      console.log(y)
    }  
  }


seleksiNilai(2 ,6,  [1, 2,3, 4, 5, 6])