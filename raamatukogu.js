let raamatud = ['War and Peace', 'The Great Gatsby','Moby Dick', 'To Kill a Mockingbird',
    'Pride and Prejudice'];
let pikkus = raamatud.length;
const lühemadRaamatud = raamatud.filter(raamat => raamat.length < 10);

const sorteeritud = raamatud.sort()

const sisaldabTgg = raamatud.includes('The Great Gatsby');


console.log(lühemadRaamatud);
console.log(sorteeritud);
console.log(sisaldabTgg);

function raamatuteArv(raamatud){
    return pikkus(raamatud)
}

console.log(pikkus)




