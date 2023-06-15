const nomes = [
    {id:4,nome:'aleluia'},
    {id:5,nome:'obgDeus'},
    {id:3,nome:'ohgloria'}
]

const novasPessoas = new Map();

for(const pessoa of nomes){
    const {id} = pessoa
    novasPessoas.set(id,{...pessoa})
}


console.log(novasPessoas.get(4))