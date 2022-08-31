// timer sets off beep depending on input
for(let i = 2; i < process.argv.length; i++){ // ==> allows < 1 inputs.
  // allow input with progessargv
  let inputNum = Number(process.argv[i])
  // Edge case: Skips negative numbers and letters
  if (inputNum > 0) {
    // set the timer based on the input
    setTimeout (() => {
      process.stdout.write('\x07'); // ==> Beeping noise
    },inputNum * 1000); // ==> (3 * 1000 = 3000ms)
  } 
}
// the output will be the beeping sound
