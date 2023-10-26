

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
  // return temp
  console.log(temp)
}
// lowerCase('ASdsaASdAsd')

// let animal = ["Ayam", "kucing"]

// lowerCase(animal)

function searchName(keyword, len){
  const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']
    for(let i = 0; i < nama.length; i++){
      let temp = ''
      temp += nama[i]
      lowerCase(temp)
      console.log(temp)

      for(j = 0; j < temp.length; j++){
        let temp2 = ''

      }
    }
}
searchName()