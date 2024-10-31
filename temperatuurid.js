let temperatuurid = [18, 21, 19, 22, 20, 17, 16];

const leiaTemp = temperatuurid.filter(temperatuur => temperatuur < 20);

const keskmine = temperatuurid.reduce((accumulator,currentValue) => accumulator + currentValue, 0)/ temperatuurid.length;

const toFahrenheit = temperatuurid.map(celcius => celcius * 9/5 + 32);

const sordi = temperatuurid.sort((a, b) => b-a);


console.log(leiaTemp);
console.log(keskmine);
console.log(toFahrenheit);
console.log(sordi);
