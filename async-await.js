console.log('Person one: shows ticket :Enter');
console.log('Person two: shows ticket :Enter');

const preMovie = async () => {
    const entryPending = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Person three : show ticket :Enter')

        }, 3000)

    });
    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getColdring = new Promise((resolve, reject) => resolve(`coldring`))

    let ticket = await entryPending;

    console.log('Husbad: we should go');
    console.log('wife:  no i am hungry');
    let popcorn = await getPopcorn;
    console.log(`bring ${popcorn}`)
    console.log('wife: get some coldring for me');
    console.log('husband : here is now lets go');
    let coldring = await getColdring;
    console.log(`bring ${coldring}`)

    return ticket;
}
preMovie().then((m) => console.log(m))

console.log('Person four: shows ticket :Enter');
console.log('Person five: shows ticket :Enter');
