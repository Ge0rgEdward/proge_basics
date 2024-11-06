// funktsioon
//function happyBirthday(name, age) {
    //console.log("Happy Birthday to you!");
    //console.log("Happy Birthday to you!");
    //console.log("Happy Birthday, dear " + name + ".");
    //console.log("Happy Birthday to you!");
    //console.log("You are now " + age + " years old!");
//}

//happyBirthday('Georg', 25);
//happyBirthday('Käsnakalle', 30);
//happyBirthday('Patrick', 37);


//function add(x, y){
    //let result = x+y;
    //return result;

//}
//console.log(add(2,3));


//function isEven(number){
    //if(number % 2 === 0){
        //return true;
    //}
    //else{
        //return false;
    //}
//}
//console.log(isEven(4));

//callback = kutsub ühes funktsioonis teise fuktsiooni

//sum(displayPage, 1, 2);

//function sum(callback, x, y){
    //let result = x + y;
    //callback(result);

//}
//function displayConsole(result){
    //console.log(result);

//}

//function displayPage(result){
    //document.getElementById('myH1').textContent=result;
//}

//let numbers = [1,2,3,4,5];

//numbers.forEach(display);




//function double(element, index, array){
    //array[index]=element *2;
//}

//function triple(element, index, array){
    //array[index]=element *3;
//}

//function square(element, index, array){
    //array[index]=element **2;
//}

//function display(element){
    //console.log(element);
//}

//let fruits=['apple', 'orange', 'banana', 'coconut']

//fruits.forEach(capitalize);
//fruits.forEach(display);

//function upperCase(element, index, array){
    //array[index]=element.toUpperCase();

//}


//function lowerCase(element, index, array){
    //array[index]=element.toLowerCase();

//}






//function capitalize(element, index, array){
    //array[index]=element.chartAt(0).toUpperCase()+element.slice(1);

//}

//function display(element){
    //console.log(element);

//}




//const dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
//const formattedDates = dates.map(formatDates);

//console.log(formattedDates)
//function formatDates(element){
    //const parts = element.split('-');
    //return `${parts[1]}/${parts[2]}/${parts[0]}`;
//}

//.filter()

const words = ['apple', 'banana', 'orange', 'kiwi',
            'pomegranate', 'coconut'];
const shortWords = words.filter(getShortWords);
//function expression 
const shortWords2 = words.filter(function (element){
    return element.length <= 6;

})

//arrow funktsioon
const longWords2 = words.filter((getLongWords2) => element.length > 6);

console.log(longWords2)

function getShortWords(element){
    return element.length <= 6;

}

function getLongWords(element){
    return element.length >6; 
}

//.reduce()

const grades = [75, 50, 90, 80, 65, 95];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum)
console.log(minimum)

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


const numbers = [1, 2, 3, 4, 5, 6]




co