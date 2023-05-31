function teste() {
    const form = document.querySelector('.form');
    const res = document.querySelector('.resposta');

    let objectPessoa = [];

    function recebeEvento(evento) {
        evento.preventDefault();

        const nome = document.querySelector('#nome').value;
        const sobrenome = document.querySelector('#sobrenome').value;
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;

        objectPessoa.push({
        nome,
        sobrenome,
        peso,
        altura
        });
        console.log(objectPessoa);
        
        res.innerHTML += `<p>Nome: ${nome} <br> Sobrenome: ${sobrenome} <br> Peso: ${peso} <br> Altura: ${altura}</p>`;

    }

    return form.addEventListener('submit', recebeEvento);
}

teste();
  