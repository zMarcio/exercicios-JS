// const request = obj =>{
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method,obj.url,true);
//     xhr.send();

//     xhr.addEventListener('load', ()=>{
//         if(xhr.status >= 200 && xhr.status < 300){
//             obj.success(xhr.responseText);
//         }else{
//             obj.error(xhr.statusText);
//         }
//     })
// }

document.addEventListener('click', e => {
    //aqui ele vai pegar o evento do click e da target para saber oq ele tá pegando
    const el = e.target;
    // console.log(el)
    //aqui ele pega a tag transforma em lowerCase e armazena em tag
    const tag = el.tagName.toLowerCase();
    // console.log(tag)

    if(tag == 'a'){
        e.preventDefault()
        carregaPagina(el);
    }
})


async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
    
        const res = await fetch(href);
        
        if(res.status !== 200) throw new Error('404 error')
        
        const html = await res.text()
        
        carregaResultado(html)
    }catch(e){console.log(e)}
    //Por fetch
    // fetch(href)
    //     .then(res => {
    //         if(res.status !== 200) throw new Error('404 error')
    //         return res.text()
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(e => console.log(e));
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}

// fetch('pagina1.html')
//     .then(response => {
//         if(response.status != 200) throw new Error('error 404 nosso');
//         return response.text();
//     })
//     .then(html => console.log(html))
//     .catch(e=>console.log(e))