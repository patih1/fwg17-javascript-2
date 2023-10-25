// 1 push, digunakan untuk menambahkan data dalam sebuah array. data akan ditambahkan di akhir array

const num = [12, 44, 32]
num.push(11)
console.log(num)

// 2 pop berfungsi untuk menghapus data dari akhir sebuah array
num.pop()
console.log(num)

// 3 shift berfungsi untuk menghapus data pertama dari sebuah array
num.shift()
console.log(num)

// 4 unshift berfungsi untuk menambahkan data di awal sebuah array
num.unshift(12)
console.log(num)

// 5 include berfungsi untuk mengecek apakah array memiliki data yang ditentukan
console.log(num.includes(44))
console.log(num.includes(13))

// 6 indexOf berfungsi untuk mencari item dalam sebuah array. jika data terdapat dalam array, akan mereturn 0, jika tidak maka mereturn -1.
// indexOf juga dapat diberikan parameter tambahan untuk melakukan pengecekan dari index ke berapa
console.log(num.indexOf(13))
console.log(num.indexOf(12, 1))
console.log(num.indexOf(12, 0))

// 7 concat berfungsi untuk menggabungkan 2 array atau lebih
const num2 = [18, 19]
const num3 = [20, 21]
const num4 = num.concat(num2)
const num5 = num.concat(num2,num3)
console.log(num4)
console.log(num5)

// 8 slice, berfungsi untuk memilih data dari dalam array. bisa digunakan untuk memilih 1 atau lebih data
console.log(num.slice(0, 2))

// 9 splice memiliki beberapa fungsi. splice dapat menambahkan, menghapus, atau mereplace data
const nama = ["nama1", "nama2", "nama3", "nama4", "nama5"]
nama.splice(4,1) // menghapus = parameter(index, jumlah data)
console.log(nama)

nama.splice(3,1,"nama5") // menghapus 1 data di index 3 lalu menambahkan "nama5" = replace. param(index, jumlah hapus, data yang ditambahkan)
console.log(nama)

nama.splice(3, 0, "nama4") // tidak menhapus data dari index 3 lalu menambahkan "nama4"
console.log(nama)

// 10 sort berfungsi untuk mengurutkan array secara alphabetic dan numeric ascending
num5.sort()
console.log(num5)

// kita dapat memberikan fungsi alternatif pengurutan menjadi descending
num5.sort(function(a,b){return b - a})
console.log(num5)