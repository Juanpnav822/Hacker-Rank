/*
https://www.hackerrank.com/challenges/one-week-preparation-kit-new-year-chaos/problem
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
  let result = 'init';
  let bribes = 0;
  let a = 1;
  let b = 2;
  let c = 3;

  for (let i = 0; i < q.length; i++){
    
    if (q[i]==a){
      //2 3 4
      a = b;
      b = c;
      c++;
    }
    
    if (q[i]==b){
      // 1 3 4
      bribes = bribes+1;
      b = c;
      c++;
    }
    
    if (q[i]==c){
      // 1 2 4
      bribes = bribes + 2;
      c++;
    }
    
    else if (q[i]>=c){
      result = 'Too chaotic';
      i=q.length;
    }
  }
  
  if (result=='Too chaotic'){
    bribes = result;
  }
  
  return console.log(bribes);
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
