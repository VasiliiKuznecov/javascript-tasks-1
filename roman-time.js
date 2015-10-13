function toRoman (number) {
    var romanNumber = '';

    if (number == 0) {
        romanNumber += '-';
        return romanNumber;
    }

    var romanDigits = [
        {value: 50, character: 'L'},
        {value: 40, character: 'XL'},
        {value: 10, character: 'X'},
        {value: 9, character: 'IX'},
        {value: 5, character: 'V'},
        {value: 4, character: 'IV'},
        {value: 1, character: 'I'}
    ];

    for (var i = 0; i < romanDigits.length; i++) {
        var charactersCount = parseInt(number / romanDigits[i].value);
        romanNumber += repeatSymbol(romanDigits[i].character, charactersCount);
        number -= charactersCount*romanDigits[i].value;
    }

    return romanNumber;
}

function repeatSymbol(symbol, number) {
    var result = '';
    for (var i = 0; i < number; i++) {
        result += symbol;
    }
    return result;
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

    var asciiString = '';

    for (var i = 0; i < 5; i++) {
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

if (parseInt(hours, 10).toString() !== hours.toString() ||
    parseInt(minutes, 10).toString() !== minutes.toString()
) {
    invalidTime = true;
}

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    invalidTime = true;
}

if (invalidTime) {
    console.log('Время указано не верно');
    return;
}

console.log(toAsciiGraphics(toRoman(hours) + ':' + toRoman(minutes)));
return;
