const elementos = [
    {tag: 'p', texto: 'frase p'},
    {tag: 'div', texto: 'frase div'},
    {tag: 'footer', texto: 'frase footer'},
    {tag: 'section', texto: 'frase section'}
];

const criar = document.querySelector('.container');
for (var i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    var criarTag = document.createElement(tag);
    criarTag.textContent = texto;

    if (tag === 'p') {
        criarTag.style.background = 'red';
    } else if (tag === 'div') {
        criarTag.style.background = 'pink';
    } else if (tag === 'footer') {
        criarTag.style.background = 'brown';
    } else {
        criarTag.style.background = 'green';
    }

    criar.appendChild(criarTag);
}
