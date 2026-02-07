//registro de  datos
let mes = parseInt(prompt("ingrese el numero perteneciente a su mes de nacimiento (1-12)"));
let dia = parseInt(prompt("ingrese el numero perteneciente a su dia de nacimiento (1-31)"));

//logica de zodiaco
// capricornio
if ((mes == 12 && dia >=22) || (mes == 1 && dia <= 19)) {alert("tu signo es capricornio")}
//acuario
else if ((mes == 1 && dia>=20) || (mes == 2 && dia <= 18)) {alert("tu signo es acuario")}
//picis
else if ((mes == 2 && dia >=19) || (mes == 3 && dia <= 20)) {alert("tu signo es piscis")}
//aries
else if ((mes == 3 && dia >=21) || (mes == 4 && dia <= 19)) {alert("tu signo es aries")}
//tauro
else if ((mes == 4 && dia >=20) || (mes == 5 && dia <= 20)) { alert("tu signo es tauro")}
//geminis
else if ((mes == 5 && dia >=21) || (mes == 6 && dia <= 20)) {alert("tu signo es geminis")}
//cancer
else if ((mes == 6 && dia >=21) || (mes == 7 && dia <= 22)) {alert("tu signo es cancer")}
//leo
else if ((mes == 7 && dia >=23) || (mes == 8 && dia <= 22)) {alert("tu signo es leo")}
//virgo
else if ((mes == 8 && dia >=23) || (mes == 9 && dia <= 23)) {alert("tu signo es virgo")}
//libra
else if ((mes == 9 && dia >=23) || (mes == 10 && dia <= 22)) {alert("tu signo es libra")}
//escorpio
else if ((mes == 10 && dia >=23) || (mes == 11 && dia <= 21)) {alert("tu signo es escorpio")}
//sagitario
else if ((mes == 11 && dia >=22) || (mes == 12 && dia <=21)) {alert("tu signo es sagitario ")}
//error
else{alert("fecha no valida. verifica que el mes sea correcto entre 1-12 y el dia entre 1-31");} 