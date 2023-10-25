const nama = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella',
  'Carol', 'Caroline', 'Carolyn',
  'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope']

// console.log(nama[1][1])
 



  for(let i = 0; i <= nama.length; i++){
    let temp = ''
    temp = nama[i]
    console.log(temp)
    let j
    for(j = 0; j < nama[i].length; j++ ){
      let k 
      k = k + nama[i][j]
      if (k == "alexandra"){
        console.log(k)
      }
    }
  }
  

  // function x(array, num1, num2){
  //   for(num1 = array.length; num1 <= num2; num1++)
  // }

  // console.log(x(name, 3))
  
