// import {franc, francAll} from 'franc'
// import langs from 'langs'
// import colors from 'colors'
// import figlet from 'figlet'
// const input = process.argv[2];
//     const langCode = franc(input);
//     if (langCode === 'und') {
//         console.log("Sorry, couldn't figure it out!".red);
//     }
//     else{
//         const langName = langs.where("3", langCode);
//         const data=langName.name
//         console.log(`Our best guess is: ${langName.name}`.green);
//     }

// figlet(function(data){

//     console.log(data);
// });
// import { franc } from 'franc'
// import langs from 'langs'
// import colors from 'colors'
// import figlet from 'figlet'
// let result;
// const input = process.argv[2]
// const langCode = franc(input)

// if (langCode === 'und') {
//   console.log("Sorry, couldn't figure it out!".red)
// } else {
//   const langName = langs.where("3", langCode)
//   result = langName.name
// }
// figlet(result, (err, data) => {
//   if (err) {
//     console.log('Something went wrong with figlet...')
//     console.dir(err)
//     return
//   }
//   console.log(data.green);
// })

import { franc } from 'franc'
import langs from 'langs'
import colors from 'colors'
import figlet from 'figlet'

const input = process.argv[2]
const langCode = franc(input)

let result;

if (langCode === 'und') {
  console.log("Sorry, couldn't figure it out!".red)
  result = "Unknown Language"
} else {
  const langName = langs.where("3", langCode)
  result = langName.name
  console.log(`Our best guess is: ${result}`.green)
}

figlet(result, (err, data) => {
  if (err) {
    console.log('Something went wrong with figlet...')
    console.dir(err)
    return
  }
  console.log(data.green)
})
