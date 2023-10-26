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
// lowerCase('ASdsaASdAsd')

// let animal = ["Ayam", "kucing"]

// lowerCase(animal)

function searchName(keyword, len){
  let keywordLowerCase = lowerCase(keyword)
  const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    let namaNew = []

    for(let i = 0; i < nama.length; i++){
      let temp = ''
      temp += nama[i]
      namaLowerCase = lowerCase(temp)
      console.log(namaLowerCase)
    
      
      for(j = 0; j < namaLowerCase.length; j++){
        let temp2 = ''
        for(k = j; k < keywordLowerCase.length + j; k++){
          
          if(namaLowerCase[k]){ 
            temp2 += namaLowerCase[k]
          }
          if(temp2 === keywordLowerCase){
            namaNew = [...namaNew, temp]
            console.log(namaNew)
          }
        }
      console.log(temp2)
      }
    }
    console.log(namaNew)
}
searchName("an")