// // Nomor 1
// function tampilkanGenap (input){
//     if (typeof input !== "string") return "error input bukan string"
//     let konten = "";
//     for (let i = 0; i < input.length; i++){
//         if(i % 2 == 1) {
//             konten += input[i]
//         }
//     }
//     return konten
// }

// console.log(tampilkanGenap("pratama"));
// console.log(tampilkanGenap("hellohello"));
// console.log(tampilkanGenap("hello hello hello"));
// console.log(tampilkanGenap(""));
// console.log(tampilkanGenap(123434));

// // Nomor 2
// function jumlahKata (input) {
//     if (typeof input !== "string") return "error input bukan string";
//     if (input === "") return 0
//     let konten = 0;
//     for (let i = 0; i < input.length; i++){
//         if (i === input.length -1 && input[i] !== " "){
//             konten ++
//         }
//         if(input[i+1] === " " && input[i] !== " "){
//             konten ++
//         }
//     } 
//     return konten
// }

// Nomor 3
// console.log(jumlahKata("pratama"));
// console.log(jumlahKata("hellohello"));
// console.log(jumlahKata("hello hello hello"));
// console.log(jumlahKata(""));
// console.log(jumlahKata("hore yeay ahaaa"));
// console.log(jumlahKata(123434));


// function jenisFonem (input) {
//     if (typeof input !== "string") return "error input bukan string";
//     if (input === "") return "jumlah fonem vokal: 0 dan jumlah fonem konsonan: 0"
//     let kontenVokal = 0;
//     let kontenKonsonan = 0;
//     let spasi = 0
//     for (let i = 0; i < input.length; i++){
//         if (input[i] === "a" ||
//             input[i] === "i" ||
//             input[i] === "u" ||
//             input[i] === "e" ||
//             input[i] === "o"){
//                 kontenVokal ++
//             }
//         else if(input[i] === " "){
//                 spasi ++
//         } 
//             else {kontenKonsonan ++}
//     }
//     return `jumlah fonem vokal :${kontenVokal}, jumlah fonem konsonan: ${kontenKonsonan}`
// }

// console.log(jenisFonem("pratama"));
// console.log(jenisFonem("hellohello"));
// console.log(jenisFonem("hello hello hello"));
// console.log(jenisFonem(""));
// console.log(jenisFonem(123434));

// Nomor 4
// function reverse(input) {
//     // if (typeof input!=="string") return "gnirts nakub atad rorre";
//     let konten = "";
//         if (typeof input === "string"){
//             for (let i = input.length -1; i>=0; i--) {
//             konten += input[i];
//             } 
//         } else if (typeof input !== "string"){
//             let error = "error! data bukan string"
//             for (let j = error.length -1; j>=0; j--) {
//             konten += error[j];     
//             }
//         } 
//     return konten;
// }
// console.log(reverse("Hello"));
// console.log(reverse("World!"));
// console.log(reverse("asikasikasik"));
// console.log(reverse(""));
// console.log(reverse(123434));

// Nomor 5
// function palindrome (input){
//     if (typeof input !== "string") return 'error data bukan string atau kurang dari 3 huruf'
//     let konten =""
//     let boolean = true
//     for (let i = input.length -1; i >= 0; i--) { 
//         konten += input[i]
//     }
//     if (konten === input && konten.length >2) { konten = true
//     }
//     else {konten = false}
//     return konten
// }

// console.log(palindrome("katak"));
// console.log(palindrome("kasur"));
// console.log(palindrome("h"));
// console.log(palindrome("kasur rusak"));
// console.log(palindrome("erererrerere"));

// Nomor 6
// function currencies(input) {
//     let pecahanUang = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
//     let uang = "";
//     for (let i=0; i<pecahanUang.length; i++) {
//         while (input>=pecahanUang[i]) {
//             uang += `${pecahanUang[i]}, `;
//             input -= pecahanUang[i];
//         }
//     }
//     return uang
// }

// console.log(currencies(1752));
// console.log(currencies(879));
// console.log(currencies(50));
// console.log(currencies(0));
// console.log(currencies(5000));

//Nomor 7
// function asterisk (input){
//     for(i = 0; i<input; i++ ) {
//         let konten= "";
//         for(j=0; j<=i; j++) {
//         konten += "*"
//         }
//         console.log(konten);
//     }
// }
// asterisk(3)
// asterisk(5)
// asterisk(0)
// asterisk(10)

// Nomor 8
// function pyramid(input) {
//     for (let i = 1; i <= input; i++) {
//       let konten = "";
//       for (let j = input; j >= i; j--) {
//         konten += " ";
//       }
//       for (let k = 0; k < i; k++) {
//         konten += "*";
//       }
//       for (let l = 1; l < i; l++) {
//         konten += "*";
//       }
//       console.log(konten);
//     }
//   }
//   pyramid(5);
//   pyramid(3);
//   pyramid(10);