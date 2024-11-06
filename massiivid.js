//const vaagen = ['õun', 'pirn', 'banaan', 'apelsin']
//let pikkus = length.vaagen;
//vaagen.push('mandariin');
//vaagen.pop();
//vaagen.sort();

//console.log(vaagen);
//console.log(pikkus);


// Camel Words ülesanne

function getWords(str) {
    if (str === '') return [];

    var words = [];
    var index = 0;

    for (var i = 1; i < str.length; i++) {
        if ('A' <= str[i] && str[i] <= 'Z' && 'a' <= str[i - 1] && str[i - 1] <= 'z') {
            words.push(str.slice(index, i));
            index = i;
        }
    }

    words.push(str.slice(index)); 
    return words;
}

function camelToTitleCase(camelStr) {
    if (camelStr === '') return '';

   
    const words = getWords(camelStr);
    
    
    const titleCased = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');

    return titleCased;
}


console.log(camelToTitleCase('esimeneLaps')); 
console.log(camelToTitleCase('camelCaseString')); 
console.log(camelToTitleCase('')); 



