/**
 * Conversion de unidades (metro, pulgadas, pies y yardas)
 * @method CambiarParametros
 * @param {string} id - id de los inputs de metro, pulgadas, pies y yardas
 * @param {number} valor - valor de los inputs de metro, pulgadas, pies y yardas
 * @return
 */

/*function cambiarUnidades(id,valor){
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido.");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value ="";
        document.lasUnidades.unid_pie.value ="";
        document.lasUnidades.unid_yarda.value ="";
    }else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value =39.3701*valor;
        document.lasUnidades.unid_pie.value =3.28084*valor;
        document.lasUnidades.unid_yarda.value =1.09361*valor;
    }else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value =0.0254*valor;
        document.lasUnidades.unid_pie.value =0.0833*valor;
        document.lasUnidades.unid_yarda.value =0.0277*valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_metro.value =0.3048*valor;
        document.lasUnidades.unid_pulgada.value =12*valor;
        document.lasUnidades.unid_yarda.value =0.333*valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value =0.9144*valor;
        document.lasUnidades.unid_pie.value =36*valor;
        document.lasUnidades.unid_pulgada.value =3*valor;
    }
}*/

function cambiarUnidades (id, valor){
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor=valor.replace (",", ".");
    }
    if (isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = " ";
        pul= " ";
        pie= " ";
        yar= " ";
    } else if (id=="metro"){
        met=valor;
        pul= valor*39.3701;
        pie= valor * 3.28084;
        yar= valor * 1.09361;
    } else if (id=="pulgada") {
        pul=valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id=="pie") {
        pie=valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id=="yarda") {
        yar=valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }
    document.lasUnidades.unid_metro.value =Number(met).toFixed(2);
    document.lasUnidades.unid_pulgada.value= Number(pul).toFixed(2);
    document.lasUnidades.unid_pie.value= Number(pie).toFixed(2);
    document.lasUnidades.unid_yarda.value= Number(yar).toFixed(2);
}

function gradosaradianes(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad= (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';

    } else if(valorMO=="val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularSuma(){
    var num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=Number(document.getElementsByName("sum_num2")[0].value);

    document.getElementsByName("sum_total")[0].innerHTML= num1+ num2;
}

function calcularResta(){
    var num1, num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=Number(document.getElementsByName("res_num2")[0].value);

    document.getElementsByName("res_total")[0].innerHTML= num1- num2;
}

function calcularMulti(){
    var num1, num2;

    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=Number(document.getElementsByName("mul_num2")[0].value);

    document.getElementsByName("mul_total")[0].innerHTML= num1* num2;
}

function calcularDiv(){
    var num1, num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=Number(document.getElementsByName("div_num2")[0].value);

    document.getElementsByName("div_total")[0].innerHTML= num1/ num2;
}

function cargarweb(){
    var cant,unidad,urlcomp;
    cant= document.getElementById("distancia").value;
    unidad=document.getElementsByName("unidades")[0].value;
    urlcomp="segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}

function cargarResultado(){
    var urlcomp,cant,uni;

    urlcomp= window.location.href.split("/")[5];

    can=urlcomp.split("#")[1];

    uni=urlcomp.split("#")[2];

    document.getElementById("dist").value =can + " " + uni;

}


function guardarLocalStorage(){
    let dist, uni;
    dist= document.getElementById("distancia").value;
    uni=document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distancials", dist);
    localStorage.setItem("unidadesls", uni);

    window.open("2_Web.html");
}

function cargarLocalStorage(){
    let cant, uni;
    cant= localStorage.getItem("distancials");
    uni= localStorage.getItem("unidadesls");

    document.getElementById("dist").value = cant + " " + uni;

}
function dibujarCirCuad(){
    var canvas=document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    var yMax= canvas.height;
    var margen= 5;
    var xMax = canvas.width;

    ctx.fillStyle = "#998133"
    ctx.fillRect(0+margen,yMax-margen-40,40,40)

    ctx.arc(xMax/2 , yMax/2 , 20, 0 ,2*Math.PI);
    ctx.stroke();
    ctx.fill()
}


var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX,posY);

    canvas.onmousedown = function() { bandera=true};
    canvas.onmouseup = function() { bandera=false};


    if(bandera){
        ctx.fillRect(posX,posY,5,5);
        ctx.fill();
    }
}

function LimpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;

}


function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var yMax= canvas.height;
    var xMax= canvas.width;

    ctx.beginPath();
    for( var i=0;i<yMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(xMax,i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    ctx.beginPath()
    for( var i=0;i<xMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,yMax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //eje x

    ctx.beginPath()
    ctx.moveTo(0,yMax/2);
    ctx.lineTo(xMax,yMax/2);
    ctx.strokeStyle = "#de0505";
    ctx.stroke();
    ctx.closePath();

//eje y

    ctx.beginPath()
    ctx.moveTo(xMax/2,0);
    ctx.lineTo(xMax/2,yMax);
    ctx.strokeStyle = "#de0505";
    ctx.stroke();
    ctx.closePath();

}

function dibujarImagen(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src="images/auto.png";

    canvas.width=canvas.width;

    img.onload = function (){
        ctx.drawImage(img,posX,posY)
    }
}


x=0;
dx=2;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;

    var img = new Image();
    img.src="images/auto.png";



    img.onload = function (){
        ctx.drawImage(img,x,100)
    }
    x+=dx;

    if(x>canvas.width){
        x=0;
    }
}