const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp')

function lampturnOnOff() {
    if(turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

function isLampBroken() {
    return lamp.src.indexOf('quebrada')  > -1;
}

function lampOn() {
    if( !isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if( !isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    if( !isLampBroken())  {
        lamp.src = './img/quebrada.jpg';
    }  
}



turnOnOff.addEventListener('click', lampturnOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);