// ASYNC BASICS EXERCISE
// 1
let name1 = "Falcon";

function falconName() {
  console.log(`Question 1`);
  console.log(name1);
}

// function falcon(n) {
//   setTimeout(() => {
//     name1 = n;
//   }, 1000);
// }
// falcon(`Sam Wilson`);
// falconName();


function falcon(n, callback) {
  setTimeout(() => {
    name1 = n;
    callback();
  }, 1000);
}
falcon(`Sam Wilson`, falconName);


// 2
let name2 = "Winter Soldier";

function winterSoldierName() {
  console.log(`Question 2`);
  console.log(name2);
}

// function winterSoldier(n) {
//   setTimeout(() => {
//     name2 = n;
//   }, 2000);
// }
// winterSoldier(`Bucky Barnes`);
// winterSoldierName();

function winterSoldier(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name2 = n;
      resolve();
    }, 2000);
  });
}

winterSoldier(`Bucky Barnes`)
  .then(winterSoldierName);

// 3
let name3 = "Agent 13";

function agent13Name() {
  console.log(`Question 3`);
  console.log(name3);
}

// function agent13(n){
//   setTimeout(() => {
//     name3 = n;
//   }, 3000);
// }

// agent13('Sharon Carter');
// agent13Name();

function agent13(n){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      name3 = n;
      resolve();
    }, 3000);
  });
}

// async function agent13(){
//   await agent13(`Sharon Carter`);
//   console.log(`Question 3`);
//   console.log(name3);
// }
// agent13();

// Or

async function func1(){
  await agent13(`Sharon Carter`);
  agent13Name();
}
func1();

// BONUS
// 4
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('First Promise')
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise')
  }, 3000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Third Promise')
  }, 4000);
});

// Waits until the longest (Time wise) Promise is complete before is runs the ".then" (AKA Callback function)
Promise.all([p1, p2, p3])
  .then(values => console.log(values));