const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;
  // let newArr = [];

  // let oldArr = arr.slice();

  // for (let i = 0; i < oldArr.length; i++) {
  //   if (oldArr[i] === undefined) { continue }
  //   if (oldArr[i] === '--discard-next') {
  //     if (!oldArr[i + 1]
  //       || newArr[newArr.length - 1] === false) {
  //       continue;
  //     } else { 
  //       if (oldArr[i + 1 === 0]) { newArr.push(0)}
  //       i++;
  //       continue;
  //     }
  //   } else if (oldArr[i] === '--discard-prev') {
  //     if (!newArr[newArr.length - 1] || !oldArr[i - 1] ) {
  //       continue;
  //     } else {
  //       if (oldArr[i - 1] === newArr[newArr.length - 1]) {
  //         newArr.pop();
  //       continue;
  //       } else { continue }
  //     }
  //   } else if (oldArr[i] === '--double-next') {
  //     if (!oldArr[i + 1] ) {
  //       continue
  //     } else {
  //       newArr.push(oldArr[i + 1]);
  //       continue;
  //     }
  //   } else if (oldArr[i] === '--double-prev') {
  //     if (!oldArr[i - 1]
  //       // || !newArr[newArr.length - 1]
         
  //       || newArr[newArr.length -1 ] === false
  //       || newArr[newArr.length - 1] !== oldArr[i - 1] ) {
  //         continue
  //       } else {
  //         if (oldArr[i - 1] === false) {
  //           newArr.push(oldArr[i - 1]);
  //           continue;
  //         }
  //           newArr.push(oldArr[i - 1]);
  //           continue;
  //       }
      
  //   } else {
  //     newArr.push(oldArr[i]);
  //   }
  // };

  let newArr = [];
  if (arr.length === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) { continue }
    if (arr[i] === `--discard-next`) {  // исключает следующий элемент исходного массива из преобразованного.
      i++;                             
      continue;
    } else if (arr[i] === `--discard-prev`) { // исключает предшествующий элемент исходного массива из преобразованного.
      if (arr[i - 1] === undefined) {
        continue;
    //  } else if(arr[i - 2] === `--discard-next`) {
        //continue;
      //      } else if (arr[i - 2] === `--double-next`) {
        newArr.pop();
        // newArr.pop();
        continue;
    } else {
        newArr.pop();
      }
      continue;
    } else if (arr[i] === `--double-next`) {
      if (arr[i + 1] === undefined) {
        continue;
      } else {
        newArr.push(arr[i + 1]);
      }
      continue;
    } else if (arr[i] === `--double-prev`) {
      if (arr[i - 1] === undefined) { // || arr[i - 2] === `--discard-next`
        continue;
      } else {
          newArr.push(arr[i - 1]);
        }
        continue;
    }
    newArr.push(arr[i]);
  }
 

  return newArr;
};