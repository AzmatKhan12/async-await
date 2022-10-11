console.log('Person one: shows ticket :Enter');
console.log('Person two: shows ticket :Enter');

const entryPending = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Person three : show ticket :Enter')
    }, 3000)
});
const popcorn = entryPending.then((t) => {
    console.log('Husbad: we should go');
    console.log('wife:  no i am hungry');
    return new Promise((resolve, reject) => resolve(`Bring Popcorn : ${t}`));
});
const getColdreing = popcorn.then((t) => {
    console.log('wife: get some coldring for me');
    console.log('husband : here is now lets go');
    return new Promise((resolve, reject) => resolve(`Bring Coldring : ${t}`))

});
getColdreing.then((t) => console.log(t))

console.log('Person four: shows ticket :Enter');
console.log('Person five: shows ticket :Enter');