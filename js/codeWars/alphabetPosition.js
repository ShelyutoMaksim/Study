function alphabetPosition(text) {
    text = text.toUpperCase().replace(/[^a-zа-яё]/gi, '').split('');
    for (let i = 0; i < text.length; i++){
        text[i]= text[i].charCodeAt(0) - 64;
    }
    return text.join(' ');
}

console.log(alphabetPosition('a ,.//bcdefghijklmnopqrstuvwxyz'));