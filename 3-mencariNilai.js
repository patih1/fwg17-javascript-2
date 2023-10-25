
let x = [1, 2, 3, 32, 5, 28]
let y 
function seleksiNilai(array,num1,num2){
  if(array.length <= 5){
    console.log("jumlah angka dalam array harus lebih dari 5")
  }else if(num1 >= num2){
    console.log("nilai awal harus lebih besar dari nilai akhir")
  } else if (array.length > 5){
    for(let x = 0; x < array.length; x++) {
      temp = array[x]
      if(temp >= num1 && temp <= num2) {
        // y.push(temp)
        y = [temp]
        // console.log(temp)
        console.log(y)
        
      }else if (temp <= num1 && temp >= num2){
        console.log("angka tidak ditemukan")
      }
      
      }
    }
  }


seleksiNilai(x,2,6)