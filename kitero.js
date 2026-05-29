// /**
//  * @param {number} num
//  * @returns {Promise<number | string>}
//  */
// const buyApple1 = (num) => {
//   if (num < 5) {
//     return Promise.resolve(num);
//   } else {
//     return Promise.reject("hiba");
//   }
// };

// console.log("indul a program");
// const res1 = buyApple1(3);
// console.log(res1);
// res1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// console.log("vege a programnak");

const buyApple2 = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num < 5) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 3000);
  });
};

console.log("buyapple2 progi indul");
const res2 = buyApple2(3);
console.log(res2);
res2
  .then((value) => {
    console.log(`megvasarolt almak szama: ${value}`);
  })
  .catch((e) => {
    console.log(`nincs ennyi alma: ${e}`);
  });
console.log("vege");

console.log("buyapple2 progi indul");
const res3 = buyApple2(5);
res3
  .then((value) => {
    console.log(`megvasarolt almak szama: ${value}`);
  })
  .catch((e) => {
    console.log(`nincs ennyi alma: ${e}`);
  })
  .finally(() => {
    console.log("vege");
  });
