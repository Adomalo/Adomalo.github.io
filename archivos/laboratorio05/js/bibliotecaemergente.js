//creamos un procedimiento para cuando el documento abra la venta emergente
function Cargar(url,titulo,ancho,alto){
    //declaramos variables para capturar el ancho y el alto de la pantalla
    var anc=screen.width; 
    var alt=screen.height;
    //declaramos variables para ubicar la ventana emergente en el centro
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    alert(x);
    alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+",top="+y+",scrollbars=NO")
}
//llamamo a la funcion cargar
window.onload=Cargar;("pagina4.html", "Ventana Emergente", 400,400);