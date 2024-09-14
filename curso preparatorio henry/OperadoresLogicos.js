function MayorYMenorYPar(num) {
    if ( num > 5 && num < 10 && num % 2 === 0) console.log(true);
    else console.log(false)    
}

MayorYMenorYPar(7);
MayorYMenorYPar(8)

function OperadorOr(str) {
    if (str === 'henry' || str.length< 2)console.log(true);
    else console.log(false);    
}
OperadorOr('h');

function Negacion(permiso) {
    if (permiso !== true) console.log('Tiene Permiso')    
}
Negacion(true);

function CondicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false)    
}

CondicionCompleja(10);
CondicionCompleja(6);
CondicionCompleja(3);
CondicionCompleja(5);