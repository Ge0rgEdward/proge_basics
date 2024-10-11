let vanus = prompt('Sisesta oma vanus');
let puuvili = prompt('Sisesta oma lemmik puuvili');
puuvili = puuvili.toLowerCase();

if (isNaN(vanus)){
    console.log('Sisesta oma vanus numbrites')
}

else if(vanus>=7 && vanus<=12){
    console.log('Sa oled laps');
}

else if(vanus>=13 && vanus<=18){
    console.log('Sa oled teismeline');
}

else if(vanus>=19 && vanus<=25){
    console.log('Sa oled täiskasvanu');
}

switch (puuvili) {
    case 'banaan':
        console.log('Banaan on magus puuvili');
        break;

    case 'õun':
        console.log('Õun on ümmargune puuvili');
        break;
    
    case 'apelsiin':
        console.log('Apelsiin on oranž ja ümmargune puuvili');
        break;

    default:
        console.log('See ei ole puuvili');

}

if (vanus>=16){
    console.log('Täispilet on 15€');
}
else if(vanus>=13 && vanus<=16){
    console.log('Sooduspilet on 10€');
}
else if(vanus>=7 && vanus<=13){
    console.log('Lapsepilet on TASUTA');
}