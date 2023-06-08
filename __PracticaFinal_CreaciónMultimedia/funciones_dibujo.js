var canvas, contexto;

/* función para inicializar el canvas */
/**************************************/
    
function iniciar_canvas(ancho, alto)
{
   canvas=document.createElement("canvas");
   document.body.appendChild(canvas);
   canvas.width = ancho;
   canvas.height = alto;
   contexto = canvas.getContext("2d");
}
   

/****************************************************/
/* funciones para pintar figuras geométricas básicas*/
    
/* pintar un rectángulo,
   x1, y1, esquina superior
   ancho, alto del rectángulo
   rojo, verde, azul, colores
   trans, transparencia (valor entre 0 y 1)*/

function rectangulo_relleno(x1,y1,ancho,alto,rojo,verde,azul,trans)
{
   
   contexto.fillStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
   contexto.fillRect(x1,y1,ancho,alto); 
  
}


function rectangulo_contorno(x1,y1,ancho,alto,rojo,verde,azul,trans)
{
   
   contexto.strokeStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
   contexto.strokeRect(x1,y1,ancho,alto); 
  
}


/* pintar un triángulo,
   x1, y1, punto inicial
   ancho, alto, base y altura del triangulo
   rojo, verde, azul, colores
   trans, transparencia (valor entre 0 y 1)*/

function triangulo_relleno(x1,y1,ancho,alto,rojo,verde,azul,trans)
{
contexto.fillStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
contexto.beginPath();
  contexto.moveTo(x1,y1); 
  contexto.lineTo(x1+ancho,y1);
  contexto.lineTo(x1+ancho/2.0,y1-alto);
  contexto.lineTo(x1,y1);
contexto.fill(); 
}


function triangulo_contorno(x1,y1,ancho,alto,rojo,verde,azul,trans)
{
contexto.strokeStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
contexto.beginPath();
  contexto.moveTo(x1,y1); 
  contexto.lineTo(x1+ancho,y1);
  contexto.lineTo(x1+ancho/2.0,y1-alto);
  contexto.lineTo(x1,y1);
contexto.stroke(); 
}


/* pintar un circulo,
   cx, cy, centro y radio
   rojo, verde, azul, colores
   trans, transparencia (valor entre 0 y 1)*/

function circulo_relleno(cx,cy,radio,rojo,verde,azul,trans) 
{
   contexto.fillStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
   contexto.beginPath();
   contexto.arc(cx, cy, radio, 0, Math.PI * 2, true); 
   contexto.closePath();
   contexto.fill();
} 

function circulo_contorno(cx,cy,radio,rojo,verde,azul,trans) 
{
   contexto.strokeStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
   contexto.beginPath();
   contexto.arc(cx, cy, radio, 0, Math.PI * 2, true); 
   contexto.closePath();
   contexto.stroke();
} 

function rombo_relleno (x1, y1, tam, rojo, verde, azul, trans)
{
    contexto.fillStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
    contexto.beginPath();
    contexto.moveTo(x1, y1);
    contexto.lineTo(x1+tam/2,y1-tam/2);
    contexto.lineTo(x1+tam,y1);
    contexto.lineTo(x1+tam/2,y1+tam/2);
    contexto.closePath();
   contexto.fill();
}

function rombo_contorno (x1, y1, tam, rojo, verde, azul, trans)
{
    contexto.fillStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+trans+')';
    contexto.beginPath();
    contexto.moveTo(x1, y1);
    contexto.lineTo(x1+tam/2,y1-tam/2);
    contexto.lineTo(x1+tam,y1);
    contexto.lineTo(x1+tam/2,y1+tam/2);
    contexto.closePath();
   contexto.stroke();
}

function retroceder_relleno(x1, y1, ancho, alto, rojo, verde, azul, trans)
{
    rectangulo_relleno(x1,y1,ancho/7,alto,rojo,verde,azul,trans);
    contexto.beginPath();
    contexto.moveTo(x1+ancho/7, y1+alto/2);
    contexto.lineTo(x1+ancho*4/7, y1);
    contexto.lineTo(x1+ancho*4/7, y1+alto);
    contexto.closePath();
    contexto.fill();
    
    contexto.beginPath();
    contexto.moveTo(x1+ancho*4/7, y1+alto/2);
    contexto.lineTo(x1+ancho, y1);
    contexto.lineTo(x1+ancho, y1+alto);
    contexto.closePath();
    contexto.fill();
}

function circulos_concentricos(cx,cy,radio,rojo1,verde1,azul1,rojo2,verde2,azul2,trans)
{circulo_relleno(cx,cy,radio,rojo1,verde1,azul1,trans);
 circulo_relleno(cx,cy,radio/2,rojo2,verde2,azul2,trans);
}

function dibujar_supermario(x1,y1,trans)
{
    {
        //zapatos
        rectangulo_relleno(x1,y1-4,15,4,107,109,0,trans);
        rectangulo_relleno(x1+4,y1-8,11,4,107,109,0,trans);

        rectangulo_relleno(x1+32,y1-4,15,4,107,109,0,trans);
        rectangulo_relleno(x1+32,y1-8,11,4,107,109,0,trans);

        //Manos
        rectangulo_relleno(x1,y1-24,12,11,234,158,34,trans);
        rectangulo_relleno(x1+35,y1-24,12,11,234,158,34,trans);

        //peto
        rectangulo_relleno(x1+8,y1-16,11,8,181,49,32,trans);
        rectangulo_relleno(x1+28,y1-16,11,8,181,49,32,trans);
        rectangulo_relleno(x1+12,y1-24,23,11,181,49,32,trans);
        rectangulo_relleno(x1+16,y1-36,15,12,181,49,32,trans);

        //botones
        rectangulo_relleno(x1+16,y1-24,4,4,234,158,34,trans);
        rectangulo_relleno(x1+27,y1-24,4,4,234,158,34,trans);

        //Camiseta 1
        rectangulo_relleno(x1,y1-28,16,4,107,109,0,trans);
        rectangulo_relleno(x1+31,y1-28,16,4,107,109,0,trans);
        rectangulo_relleno(x1+4,y1-32,12,4,107,109,0,trans);
        rectangulo_relleno(x1+31,y1-32,12,4,107,109,0,trans);

        rectangulo_relleno(x1+8,y1-24,4,4,107,109,0,trans);
        rectangulo_relleno(x1+35,y1-24,4,4,107,109,0,trans);

        rectangulo_relleno(x1+8,y1-36,8,4,107,109,0,trans);
        rectangulo_relleno(x1+20,y1-36,8,8,107,109,0,trans);
        rectangulo_relleno(x1+28,y1-36,4,4,107,109,0,trans);

        //Cabeza amarilla
        rectangulo_relleno(x1+8,y1-56,27,12,234,158,34,trans);
        rectangulo_relleno(x1+12,y1-44,27,8,234,158,34,trans);
        rectangulo_relleno(x1+35,y1-52,8,8,234,158,34,trans);
        rectangulo_relleno(x1+43,y1-48,4,4,234,158,34,trans);

        //Cara
        rectangulo_relleno(x1+4,y1-52,4,12,107,109,0,trans);
        rectangulo_relleno(x1+8,y1-44,4,4,107,109,0,trans);
        rectangulo_relleno(x1+8,y1-56,12,4,107,109,0,trans);
        rectangulo_relleno(x1+12,y1-52,4,8,107,109,0,trans);
        rectangulo_relleno(x1+16,y1-48,4,4,107,109,0,trans);
        rectangulo_relleno(x1+28,y1-56,4,8,107,109,0,trans);
        rectangulo_relleno(x1+32,y1-48,4,4,107,109,0,trans);
        rectangulo_relleno(x1+28,y1-44,16,4,107,109,0,trans);

        //Gorra
        rectangulo_relleno(x1+8,y1-60,35,4,181,49,32,trans);
        rectangulo_relleno(x1+12,y1-64,21,4,181,49,32,trans);
    }
}

function dibujar_frasco(x1,y1,tamano,rojo,verde,azul,alpha)
{
    contexto.fillStyle = 'rgb('+Math.floor(rojo)+','+Math.floor(verde)+','+Math.floor(azul)+','+alpha+')';
    contexto.beginPath();
    contexto.moveTo(x1,y1);
    contexto.lineTo(x1, y1+(23*tamano));
    contexto.lineTo(x1-(12*tamano), y1+(41*tamano));
    contexto.lineTo(x1+(16*tamano), y1+(41*tamano));
    contexto.lineTo(x1+(5*tamano), y1+(23*tamano));
    contexto.lineTo(x1+(5*tamano), y1);
    contexto.lineTo(x1+(14*tamano), y1);
    contexto.lineTo(x1+(16*tamano), y1+(2*tamano));
    contexto.lineTo(x1+(16*tamano), y1+(5*tamano));
    contexto.lineTo(x1+(14*tamano), y1+(7*tamano));
    contexto.lineTo(x1+(10*tamano), y1+(7*tamano));
    contexto.lineTo(x1+(10*tamano), y1+(23*tamano));
    contexto.lineTo(x1+(31*tamano), y1+(55*tamano));
    contexto.lineTo(x1+(31*tamano), y1+(60*tamano));
    contexto.lineTo(x1+(26*tamano), y1+(62*tamano));
    contexto.lineTo(x1-(22*tamano), y1+(62*tamano));
    contexto.lineTo(x1-(26*tamano), y1+(60*tamano));
    contexto.lineTo(x1-(26*tamano), y1+(55*tamano));
    contexto.lineTo(x1-(26*tamano), y1+(55*tamano));
    contexto.lineTo(x1-(6*tamano), y1+(23*tamano));
    contexto.lineTo(x1-(6*tamano), y1+(7*tamano));
    contexto.lineTo(x1-(9*tamano), y1+(7*tamano));
    contexto.lineTo(x1-(11*tamano), y1+(5*tamano));
    contexto.lineTo(x1-(11*tamano), y1+(2*tamano));
    contexto.lineTo(x1-(9*tamano), y1);
    contexto.closePath();
    contexto.fill();
    
}

function composicion(tipo)
{
    if (tipo==1) contexto.globalCompositeOperation = "overlay";
    if (tipo==2) contexto.globalCompositeOperation = "xor";
    if (tipo==3) contexto.globalCompositeOperation = "aaaaaa";
    
}

function dibujar_nubes(x1,y1,tamano,alpha)
{
    contexto.fillStyle = 'rgb('+Math.floor(255)+','+Math.floor(255)+','+Math.floor(255)+','+alpha+')';
    contexto.beginPath();
    contexto.moveTo(x1,y1);
    contexto.lineTo(x1+(7*tamano), y1-(5*tamano));
    contexto.lineTo(x1+(11*tamano), y1-(5*tamano));
    contexto.lineTo(x1+(15*tamano), y1);
    contexto.lineTo(x1+(16*tamano), y1+(2*tamano));
    contexto.lineTo(x1+(20*tamano), y1-(3*tamano));
    contexto.lineTo(x1+(22*tamano), y1+(7*tamano));
    contexto.lineTo(x1+(17*tamano), y1+(9*tamano));
    contexto.lineTo(x1+(15*tamano), y1+(7*tamano));
    contexto.lineTo(x1+(13*tamano), y1+(10*tamano));
    contexto.lineTo(x1+(1*tamano), y1+(9*tamano));
    contexto.closePath();
    contexto.fill();
    
}