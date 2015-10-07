function toRoman (number) {
    var romanNumber = "";

    if (number == 0) {
        romanNumber += '-';
        return romanNumber;
    }

    var numL = parseInt(number / 50);
    number -= numL*50;
    romanNumber = appendSymbols(romanNumber, 'L', numL);
    if (number >= 40) {
        number -= 40;
        romanNumber += 'XL';
    }


    var numX = parseInt(number / 10);
    number -= numX*10;
    romanNumber = appendSymbols(romanNumber, 'X', numX);
    if (number%10 == 9) {
        number -= 9;
        romanNumber += 'IX';
    }

    var numV = parseInt(number / 5);
    number -= numV*5;
    romanNumber = appendSymbols(romanNumber, 'V', numV);
    if (number%5 == 4) {
        number -= 4;
        romanNumber += 'IV';
    }

    var numI = number;
    romanNumber = appendSymbols(romanNumber, 'I', numI);
    return romanNumber;
}

function appendSymbols (string, symbol, number) {
        for (var i = 0 ; i < number ; i++) {
            string += symbol;
        }
        return string;
}

function toAsciiGraphics (string) {
    var asciiGraphics = {
        'I' : {0:' IIIIII ', 1:'   II   ', 2:'   II   ', 3:'   II   ', 4:' IIIIII '},
        'V' : {0:' V    V ', 1:' V    V ', 2:' V    V ', 3:'  V  V  ', 4:'   VV   '},
        'X' : {0:' X    X ', 1:'  X  X  ', 2:'   XX   ', 3:'  X  X  ', 4:' X    X '},
        'L' : {0:' L      ', 1:' L      ', 2:' L      ', 3:' L    L ', 4:' LLLLLL '},
        ':' : {0:'   ::   ', 1:'   ::   ', 2:'        ', 3:'   ::   ', 4:'   ::   '},
        '-' : {0:'        ', 1:'        ', 2:' ------ ', 3:'        ', 4:'        '}
    };

    var asciiString = "";

    for (var i = 0 ; i < 5 ; i++) {
        for (var j = 0; j < string.length; j++) {
            asciiString += asciiGraphics[string[j]][i];
        }
        asciiString += '\n';
    }
    return asciiString;
}

var hours = process.argv[2];
var minutes = process.argv[3];

var invalidTime = false;

if (parseInt(hours) != hours || parseInt(minutes) != minutes) {
    invalidTime = true;
}

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    invalidTime = true;
}

if (invalidTime) {
    console.log('Время указано не верно');
    return;
}

console.log(toAsciiGraphics(toRoman(hours)+':'+toRoman(minutes)));
return;
