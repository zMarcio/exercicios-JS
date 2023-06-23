exports.paginaInicial = (req,res) => {
    res.send(`
    <form action='/' method='POST'>
        nome do cliente: <input type='text' name='qualquercoisa'><br>
        Outro Campo: <input type='text' name='aquioutrocampo'><br>
        <button>Olá mundo</button>
    </form>`
    )
}

exports.trataPost = (req,res) => {
    res.send('Sou o post')
}