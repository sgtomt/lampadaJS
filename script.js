const ligarLampada = document.getElementById ('liga');
const desligarLampada = document.getElementById ('desliga');
const lampada = document.getElementById('lampada');
const titulo = document.getElementById('titulo');

function lampadaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function ligaLampada(){
    if(!lampadaQuebrada()){
        lampada.src = './img/acesa.jpg';
    }
}

function desligaLampada(){
    if(!lampadaQuebrada()){
    lampada.src = './img/desligada.jpg';
    }
}

function quebraLampada(){
    lampada.src = './img/quebrada.jpg';
    titulo.textContent = 'Recarregue a página!';
}


ligarLampada.addEventListener('click', ligaLampada);
desligarLampada.addEventListener('click', desligaLampada);
lampada.addEventListener('dblclick', quebraLampada);
lampada.addEventListener('mouseover', ligaLampada);
lampada.addEventListener('mouseleave', desligaLampada);


