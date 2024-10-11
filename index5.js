let x = prompt('x=...');
let y = prompt('y=...');

x= Number(x);
y= Number(y);

let kalkulaator = prompt('Sisesta tehe a, s, m, d, e või r');
let liida= x+y;
let lahuta= x-y;
let korruta= x*y;
let jaga= x/y;
let astenda= x+=y;
let jääk= x%y


switch (kalkulaator) {
    case 'liida':
        console.log('Summa on:'+ liida);
        break;
    case 'lahuta':
        console.log('Vahe on:'+ lahuta);
        break;
    case 'korruta':
        console.log('Korrutis on:'+ korruta);
        break;
    case 'jaga':
        console.log ('Jagatis on:'+ jaga);
        break;
    case 'astenda':
        console.log('Väärtus on:'+ astenda);
        break;
    case 'jääk':
        console.log('Jääk on:'+ jääk);
        break;
    
    default:
        console.log('Sisesta õige tehe');
}
