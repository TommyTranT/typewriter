// Using the function structure from 'typewriter',
// we loop through the animation every 200ms 
const sentence = `|/-\|/-\|`;
function textInterval (string) {
  
  for (let i = 0; i < string.length; i++) {
    setTimeout (() => {
      process.stdout.write(`\r${string[i]}`)
    }, 200 * (i + i)); 
  }
  setTimeout (() => {
    process.stdout.write('\n')
  }, 5000); 
}

textInterval(sentence);