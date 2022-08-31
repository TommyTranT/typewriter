const sentence = "hello there from lighthouse labs";

// // // for (const char of sentence) {
// // //   setTimeout(() => {
// // //     process.stdout.write(char);
// // //   }, 1000) 
 
// // // }

function textInterval (string) {
  
  for (let i = 0; i < string.length; i++) {
    setTimeout (() => {
      process.stdout.write(string[i])
    }, 50 * (i + i)); 
  }
  setTimeout (() => {
    process.stdout.write('\n')
  }, 5000); 
}

textInterval(sentence);






