let temp = parseFloat(prompt('sisesta temperatuur'));
let scale = prompt('Sisesta skaala (F või C)').toUpperCase();


function celcsiusToFahrenheit(temp){
    return (temp * 9/5)+32;
}

function fahrenheitToCelcius(temp){
    return (temp - 32)*5/9;
}

let convertedTemp;

if (scale === 'C'){
    convertedTemp = celcsiusToFahrenheit(temp);
    alert(`${temp} kraadi on võrdne ${convertedTemp.toFixed(2)} F`);

} else if (scale === 'F'){
    convertedTemp = fahrenheitToCelcius(temp)
    alert(`${temp} kraadi on võrdne ${convertedTemp.toFixed(2)} C`);

} else{
    alert('Palun sisesta kas C või F')
}













