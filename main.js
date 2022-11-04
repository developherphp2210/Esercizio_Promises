import * as utility from "./utility.js";

const divMain = document.querySelector('.excercise-display');
const divError = document.querySelector('.error-display');
const divLog = document.querySelector('.log-display');
    
const promises = [];

for (let i=0;i<50;i++){
    promises.push(utility.randomPromise(i,divMain));
}    
    
var totTime = 0;

Promise.all(promises).then((result) => {
    result.forEach((time) => {
        if (time > totTime){
            totTime = time;
        }             
    });
    utility.AddDiv(divLog,`Tutte le Promises ALL sono state completate entro ${totTime}s`);
}).catch((e) => {
    utility.AddDiv(divError,e);
});

Promise.allSettled(promises).then((result) => {
    result.forEach((time) => {
        if (time > totTime){
            totTime = time;
        }             
    });
    utility.AddDiv(divLog,`Tutte le Promises ALLSettled sono state completate entro ${totTime}s`);
}).catch((e) => {
    utility.AddDiv(divError,e);
});

Promise.any(promises).then((result) => {
    utility.AddDiv(divLog,`La prima Promises Any è finita in ${result}s`);
}).catch((e) => {
    utility.AddDiv(divError,e);
});

Promise.race(promises).then((result) => {
    utility.AddDiv(divLog,`La prima Promises Race è finita in ${result}s`);
}).catch((e) => {
    utility.AddDiv(divError,e);
});