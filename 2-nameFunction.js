  function lowerCase(str){
  let mapingAbjad = {
    A:'a',
    B:'b',
    C:'c',
    D:'d',
    E:'e',
    F:'f',
    G:'g',
    H:'h',
    I:'i',
    J:'j',
    K:'k',
    L:'l',
    M:'m',
    N:'n',
    O:'o',
    P:'p',
    R:'r',
    S:'s',
    T:'t',
    U:'u',
    V:'v',
    W:'w',
    X:'x',
    Y:'y',
    Z:'z'
  }
  let temp = ''
  for(i = 0; i < str.length; i++){
    if(str[i] >= 'A' && str[i] <= 'Z'){
      temp += mapingAbjad[str[i]]
    }else {
      temp += str[i] 
    }  
  }
  return temp
  // console.log(temp)
}

function doubleCheck (arr){
  let temp = []
for(i = 0; i < arr.length; i++){

  if(arr[i] != arr[i+1]){

  temp = [...temp,arr[i]]
  }
} 
  // console.log(temp)
  return temp
}

function searchName(keyword, limit, cb){
  let keywordLowerCase = lowerCase(keyword)
  const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    let namaNew = []
    let x = []
    for(let i = 0; i < nama.length; i++){
      let temp = ''
      temp += nama[i]
      namaLowerCase = lowerCase(temp)
      // console.log(namaLowerCase)
      
      for(j = 0; j < namaLowerCase.length; j++){
        let temp2 = ''
        for(k = j; k < keywordLowerCase.length + j; k++){
          
          if(namaLowerCase[k]){ 
            temp2 += namaLowerCase[k]
          }
          if(temp2 === keywordLowerCase){
            namaNew = [...namaNew, temp]
            
          }
        }
      // console.log(temp2)
      }
    }
    x = [...namaNew]
    // console.log(x)
    // for(l = 0; l < limit; l++){
    //   result = [...result, x[l]]
    //   console.log(result)
    // }
    return cb(doubleCheck(x), limit)
}

const limitData = (arr, limit) => {

  let result = []
  for(i = 0; i < limit; i++) {
    if(arr[i]){
    result = [...result, arr[i]]
    }
  }
  return result
}

console.log(searchName("z", 2, limitData))



//--------------------------------------------------------------------------------------------------//

function cariNama(keyword, limit, cb){
  const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

    const filterNama = (data) => {
      const nama = data.toLowerCase()
      return nama.includes(keyword)
    }
    
    return cb(nama.filter(filterNama),limit)
}

const limitOutput = (nama, limit) => {
  return nama.slice(0, limit)
}

console.log(cariNama('an', 9, limitOutput))

