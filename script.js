const dictionary = {
    'а': 'a',
    'б': '6',
    'в': 'B',
    'г': 'r',
    'д': 'D',
    'е': 'e',
    'ё': '€', 
    'ж': '}|{',
    'з': '3',
    'и': 'u',
    'й': 'u',
    'к': 'K',
    'л': 'Jl',
    'м': 'M',
    'н': 'H',
    'о': 'o',
    'п': 'TT',
    'р': 'p',
    'с': 'C',
    'т': 'T',
    'у': 'y',
    'ф': '8',
    'х': 'X',
    'ц': 'C',
    'ч': '4',
    'ш': 'W',
    'щ': 'W]',
    'ъ': 'b',
    'ы': 'bl',
    'ь': 'b',
    'э': '3',
    'ю': 'I-O',
    'я': '9l'
};

function generateNick(text) {
    let result = '';
    
    for (let char of text.toLowerCase()) {
        if (dictionary.hasOwnProperty(char) && dictionary[char]) {
            result += dictionary[char];
        } else if (char === ' ') {
            result += '_';
        } else {
            result += char;
        }
    }
    
    return result;
}

document.getElementById('input').addEventListener('input', function() {
    const input = this.value;
    const output = generateNick(input);
    document.getElementById('output').value = output;
});

document.getElementById('copy').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    
    const button = this;
    button.textContent = '✓ СКОПИРОВАНО';
    button.style.background = '#00ff00';
    
    setTimeout(() => {
        button.textContent = 'СКОПИРОВАТЬ';
        button.style.background = '';
    }, 1500);
});