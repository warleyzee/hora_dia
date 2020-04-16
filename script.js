
var data = document.getElementById('hora');
var img = document.getElementById('imagem')
var corpo = document.getElementById('corpo');
var saudacao = document.querySelector('div#saudacao');

var horaAtual = new Date();// pega a data atual da maquina
var horas = horaAtual.getHours();//pega so a hora

data.innerHTML = `Agora são ${horas} Horas.` // imprime a hora na tela 

if(horas >= 0 && horas < 12){ // condição pra saber se é de manha
    //BOM DIA.
    img.src =  'manha.png'; // mostra a imagem na tela 
    corpo.style.background = '#e2cd9f'; // muda a cor de fundo
    saudacao.innerHTML = "Bom dia!!!" // muda a saudação
}else if (horas >= 12 && horas <18){
    //BOA TARDE
    img.src = 'tarde.png';
    corpo.style.background = '#b9846f';
    saudacao.innerHTML = "Boa Tarde!!!"
}else{
    //BOA NOITE
        img.src = 'noite.png';
        corpo.style.background = '#515154';
        saudacao.innerHTML = "Boa Noite!!!"
}