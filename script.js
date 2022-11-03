// FUNCTION________________________________________________________________________________________

// function sum(){

// }

/* function so'zi yoziladi 
    nom beriladi
    tanasiga nima qilish yoziladi
 */


// function sum(){
//     let num = 5 + 6

//     return num
// }
// let result = sum()
// console.info(result)


// function sum(num1, num2){
//     let natija = num1 * num2    /* Function bu qolib  */
//     return natija
// }
//   let amount = sum(7,5)  /* let bu qolib bo'yicha yasash */
//   let amount2 = sum(2,5)
//   let amount3 = sum(7,1)
//   let amount4 = sum(7,8)
//   console.info(amount, amount2, amount3, amount4)




// function sum(num1, num2){
//     let natija = num1 - num2

//     return natija
// }

// let user = + prompt('son kiriting')
// let user2 = + prompt('ikkinchi sonni kiriting')
// let amount = sum(user, user2)
// alert(amount)





// // let z = 10
// // let y = 5

// function  $ (num1 = 4, num2 = 5){
//     let amount = num1 + num2
//     return amount
// }

// let result = $()
// let result2 = $(9)
// console.info(result, result2)

/* RANDOM_______________________________________________________________________________________________________ */

// Math.floor() /* Sonlarni kichik tarafga qarab butunlab beradi */
// Math.random() /* Sonlarni 0 va 1 orasida ajratadi */

// function run (min, max){
//    return  Math.floor(Math.random() * (max - min + 1) + min)
// }

// let amount = run(1,10)
// let amount2 = run(1,10)
// let amount3 = run(1,10)
// let amount4 = run(1,10)
// let amount5 = run(1,10)
// let amount6 = run(1,10)





// function run (min, max){
//     return  Math.floor(Math.random() * (max - min + 1) + min)
// }

//  min = +prompt( 'eng kichik son')
//  max = +prompt( 'eng katta son')


// function sum(num1, num2){
//     let natija = num1 - num2

//     return natija
// }

// let user = + prompt('son kiriting')
// let user2 = + prompt('ikkinchi sonni kiriting')
// let amount = sum(user, user2)
// alert(amount)



/* HOMEWORK LS4-1_______________________________________________________________________________________________ */

function sum (name, oldyear, nowears){
    let natija = name + oldyear + nowears 
    return(natija)
}

function yosh (num1, num2){
    let jami = num1 - num2
    return(jami)
}
let ismi = prompt('Ismingizni kiriting')
let tugilgan = +prompt('Tug\'ilgan yilingizni kiriting')
let hozir = +prompt('Hozirgi yilni kiriting')
let yoshingiz = yosh(tugilgan, hozir)
alert('Sizning ismingiz- ' + ismi + ', Tug\'ilgan yilingiz - ' + tugilgan + ', Hozir- ' + hozir + ' yil ' + ', Yoshingiz' + yoshingiz + ' da')


// /* HOMEWORK LS4-1_______________________________________________________________________________________________ */

function run (min, max){
        return  Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    let msoni = +prompt('Misollar sonini kiriting')
    let minN = +prompt('Eng kichik sonni kiriting')  
    let maxN = +prompt('Eng katta sonni kiriting') 
 


for(i = 0; i < msoni; i++){
    let num1 = run(minN, maxN)
    let num2 = run(maxN, minN)
    
    let text = num1 + ' + ' + num2 + ' = '
    let fyjavob = +prompt(text)
    let javob = num1 + num2
    let answer = javob === fyjavob ? 'Sizning javob to\'g\'ri - ' : 'Sizning javob not\'og\'ri - ' 
    alert(answer + fyjavob + ' ! ' + ' To\'g\'ri javob ' + javob + '!')
    
    let text2 = num2 + ' - ' + num1 + ' = '
    let fyjavob2 = +prompt(text2)
    let javob2 = num2 - num1
    let answer2 = javob2 === fyjavob2 ? 'Sizning javob to\'g\'ri ' : 'Sizning javob not\'og\'ri '
    alert(answer2 + fyjavob2 + ' ! ' + ' To\'g\'ri javob ' + javob2 + '!')

    let text22 = num2 + ' / ' + num1 + ' = '
    let fyjavob22 = +prompt(text22)
    let javob22 = num2 / num1
    let answer22 = javob22 === fyjavob22 ? 'Sizning javob to\'g\'ri ' : 'Sizning javob not\'og\'ri '
    alert(answer22 + fyjavob22 + ' ! ' + ' To\'g\'ri javob ' + javob22 + '!')

    let text23 = num1 + ' * ' + num2 + ' = '
    let fyjavob23 = +prompt(text23)
    let javob23 = num1 * num2
    let answer23 = javob23 === fyjavob23 ? 'Sizning javob to\'g\'ri ' : 'Sizning javob not\'og\'ri '
    alert(answer23 + fyjavob23 + ' ! ' + ' To\'g\'ri javob ' + javob23 + '!')
    
    
  


}

