var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = {
    UP:38, 
    DOWN: 40,
    LEFT:37,
    RIGHT: 39
};
var fondo = {
    url: "tile.png",
    cargaOK: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {
    url: "vaca.png",
    cargaOK: false
}; // Este objeto se declara con el fin de saber el orden de carga de las imagenes para futuras incorporaciones

var cantidad = aleatorio(5,10);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
fondo.cargaOK = true;
dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos()
{
    cerdo.cargaOK = true;
    moverAnimal();
}
function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
if(fondo.cargaOK);
{
    papel.drawImage(fondo.imagen, 0, 0);
}      
if(vaca.cargaOK);
{
    for(var v=0; v<cantidad; v++)   
    {
    var x = aleatorio(0,10);
    var y = aleatorio(0,10);
    var x = x * 40;
    var y = y * 40;
    papel.drawImage(vaca.imagen, x, y);
    } 
    
} // borre el if del cerdo para hacer movimiento con teclas
if(pollo.cargaOK);
{
    for(var p=0; p<cantidad; p++)   
    {
    var x = aleatorio(0,5);
    var y = aleatorio(0,5);
    var x = x * 40;
    var y = x * 40;
    papel.drawImage(pollo.imagen, x, y);}      
}
}

function moverAnimal(evento)
{
var movimiento = 10
if(fondo.cargaOK == true)
{
   papel.drawImage(fondo.imagen, 0,0);
}

if(cerdo.cargaOK == true)
{
    switch(evento.keyCode)
    {
        case teclas.UP:     
           
           papel.drawImage(cerdo.imagen, x, y - movimiento);                   
            y = y - movimiento;

        break;

        case teclas.DOWN:
           
           papel.drawImage(cerdo.imagen, x,y + movimiento);                
           y = y + movimiento;

           break;

        case  teclas.LEFT:
           
           papel.drawImage(cerdo.imagen, x - movimiento, y);                   
           x = x - movimiento;

           break;

        case teclas.RIGHT:
           
           papel.drawImage(cerdo.imagen, x + movimiento,y);               
           x = x + movimiento;
           break;
        
         default:
             break;   
    }
}    
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min
    return resultado; 
}