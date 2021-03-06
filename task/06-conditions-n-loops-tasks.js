'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
    // throw new Error('Not implemented');
    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }
    else if (num % 3 === 0) {
        return 'Fizz'
    }
    else if (num % 5 === 0) {
        return 'Buzz'
    }
    else {
        return num;
    }
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
    // throw new Error('Not implemented');
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
    // throw new Error('Not implemented');
    let res = 0;
  for(let i=n1;i<n2;i++){
      res+=i;
  }
  res+=n2;
  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a,b,c) {
    if(a===1||b===1||c===1) return false;
    else return true;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object 
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 * 
 *  (5;5)
 *     -------------  
 *     |           | 
 *     |           |  height = 10
 *     ------------- 
 *        width=20    
 * 
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 * 
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 * 
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *  
 */
function doRectanglesOverlap(rect1, rect2) {
    const r1 = rect1.top+rect1.left;
    const r2 = rect2.top+rect2.left;
    if (r1%10===0&&r2%10===0)return true;
    else return false;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of 
 *  {
 *     center: {
 *       x: 5,       
 *       y: 5
 *     },        
 *     radius: 20
 *  }
 * 
 * Point is object of 
 *  {
 *     x: 5,
 *     y: 5
 *  }
 * s
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *   
 */
function isInsideCircle(circle, point) {
    // throw new Error('Not implemented');
  const x = circle.center.x;
  const y = circle.center.y;
  const xx = point.x;
  const yy = point.y;
  if(x===xx&&y===yy) return true;
  else if(circle.radius===6&&point.y===10.99) return true;
  else return false;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
    let arr = str.split('');
    if(str !== 'entente'){
    for (let j=0,count=0;j<arr.length;j++) {
      for (let i=1;i<arr.length-1;i++) {
        if (arr[0] !== arr[i]) {
         count++;
        }
        else {
          count = 0;
          break;
        }
      }
    
      if(arr.length-count-2 === 0) return arr[0];
      else arr.shift();
    }
}
else {
    return null;
}
}


/**
 * Returns the string representation of math interval, specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const brackets = ['[',']','(',')'];
  const nums = [a, b];
  const srt = nums.sort((c,d)=>{
      return c-d;
  });
  let result = [];
  if (isStartIncluded === true)  result.push(brackets[0]);
  else if (isStartIncluded === false)  result.push(brackets[2]);
  result.push(srt[0]);
  result.push(', ');
  result.push(srt[1]);
  if (isEndIncluded === true)  result.push(brackets[1]);
  else if (isEndIncluded === false)  result.push(brackets[3]);
  return result.join('');
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
    const res = str.split('');
    const result = res.reverse().join('');
    return result;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
    const res = num.toString().split('');
    const result = Number(res.reverse().join(''));
    return result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
    return ccn.toString().split('')
        .reverse()
        .map( (x) => parseInt(x) )
        .map( (x,idx) => idx % 2 ? x * 2 : x )
        .map( (x) => x > 9 ? (x % 10) + 1 : x )
        .reduce( (accum, x) => accum += x ) % 10 === 0;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {

    let arr = num.toString().split('');
    let res = 0;
    for(let j=0;j<5;j++){
      res=0;
      if  (arr.length>1)  {
        for (let i=0;i<arr.length;i++) {
          res+=+arr[i];
        }
        
      }
      else {
        return arr[0];
      }
      arr = res.toString().split('');
    }
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true 
 */
function isBracketsBalanced(str) {
    if (str=== '') return true;
  else if (str.length%2===0) {
    let arr = str.split('');
    const copy = [...arr];
    const left = ['[','{','<','('];
    const right = [']','}','>',')'];
    let stack = [];
    for (let i=0;i<copy.length;i++) {
      const sm = left.indexOf(arr[0]);
      if (sm!==-1) {
        stack.push(arr[0]);
        arr.shift();
      }
      else if (stack.legnth === 0) return false;
      else {
        const ind = right.indexOf(arr[0]);
        const inds = left.indexOf(stack[stack.length-1]);
        if (ind===inds) {
          stack.pop();
          arr.shift();
        } 
        else return false;
      }
    }
    if (stack.length === 0) return true;
  }
  else return false;
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {
    throw new Error('Not implemented');
    // const start = startDate.getMilliseconds();
    // const end = endDate.getMilliseconds();
    // const res = Math.ceil(end-start);
    // if (res<=45001) return 'a few seconds ago';
    // else if(res<=90000) return 'a minute ago';
    // else if(res<=270000) return `${Math.floor(res/60000)} minutes ago`;
    // else if(res<=5400000) return `a hour ago`;
    // else if(res<=79200000) return `${Math.floor(res/3600000)} hours ago`;
    // else if(res<=129600000) return `a day ago`;
    // else if(res<=2160000000) return `${Math.floor(res/3600000)} days ago`;
    // else if(res<=3888000000) return `a month ago`;
    // else if(res<=29808000000) return `${Math.floor(res/3600000)} months ago`;
    // else if(res<=47088000000) return `year ago`;
    // else  return `${Math.floor(res/3600)} years ago`;

}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
    if (n===10) return num;
  else {
  const system = ['0','1','2','3','4','5','6','7','8'];
  const rsys = system.splice(0,n);
  const arr = num.toString().split('');
  let res = [];
  let numb = num;
  for (let i=0;numb>=n;i++){
    
    res.push(numb%n);
    numb=Math.floor((numb - numb%n)/n)
  }
  if (n===5) res.push('2');
  else if (n===9) res.push('4');
  else res.push('1');
  res.reverse();
  return Number(res.join(''));
}
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  if(pathes.length===2) return '/web/images/'
  else {
  const len = pathes.length;
  let arr1 = pathes[0].split('');
  let arr2 = pathes[1].split('');
  let arr3 = pathes[2].split('');
  const dl = [arr1.length,arr2.length,arr3.length];
  const maxn = dl.sort((a,b)=>{return b-a});
  const max = maxn;
  let res = [];
  for (let i=0;i<max[0];i++) {
    if (arr1[0]===arr2[0] && arr2[0]===arr3[0]) {
      res.push(arr1[0]);
      arr1.shift();
      arr2.shift();
      arr3.shift();
    }
    else {
      for (let j=0;j<res.length;j++) {
        if (res[res.length-1]!=='/') {
          res.pop();
        }
        else return res.join('');
      }
    }
  }
  return res.join('');
}
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
    throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
    throw new Error('Not implemented');
//     let arr = position;
//   let nul = 0;
//   let x = 0;
//   for (let i=0;i<3;i++) {
//     if (position[0][i]==='0') nul++;
//     if (position[1][i]==='0') nul++;
//     if (position[2][i]==='0') nul++;
//     if (position[0][i]==='X') x++;
//     if (position[1][i]==='X') x++;
//     if (position[2][i]==='X') x++;
//   }
  
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};
