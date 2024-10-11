//math on sisse sisse ehitatud objekt mis sisaldab erinevaid meetodeid
//let x = 3;
//let y = 2;
//let z = 1;

// z math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
//z = mathh.pow(x,y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.abs(x);
//z = Math.sign(x);




// Random number generator
//const min = 50;
//const max = 100;
//let randomNum = Math.floor(Math.random()*(min - max)); + min

//console.log(randomNum);

const nupp = document.getElementById("nupp");
const tekst = document.getElementById("tekst");
const min=1;
const max=6;

nupp.onclick = function(){
    let suvaNum = Math.floor(Math.random() * max) + min;
    tekst.textContent = suvaNum;

}

//IF statement 

//let age=3
//if(age>=18){
    //console.log('Sa oled piisavalt vana, et olla siin veebilehel');
//}

//else{
    //console.log('Sa pead olema 18+, et viibida siin saidil');
//}

//let age2 = 16;
//let onLoad = True;

//if(age2>=18){
    //console.log('Sa oled piisavalt vana, et autoga sõita');

//}
//else{
    //console.log('Sa oled liiga noor, et autoga sõita');
//}

let vanus = prompt('Sisesta oma vanus')

if (isNaN(vanus)){
    console.log('Siesta oma vanus numbrites')
}


else if(vanus<7){
    console.log('Sa oled liiga noor, et koolis käia');
    
}

else if(vanus>=7 && vanus<=16){
    console.log('Sa käid põhikoolis ning sa sööd kell 10')
}

else if(vanus>=16 && vanus<=19){
    console.log('Sa käid keskkoolis ning sa sööd kell 11')
}

else if(vanus>=20){
    console.log('Sina sööd kell 12')
}
