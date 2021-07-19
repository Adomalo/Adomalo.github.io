var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");


function MostrarRegistro(){
    var listaregistro=Mostrar();

    tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";

    for(var i=0; i<listaregistro.length;i++){

    var fila=tbody.insertRow(i);

    var titulonombre=row.insertCell(0);
    var tituloapellido=row.insertCell(1);
    var titulocorreo=row.insertcell(2);

    titulonombre.innerHTML=listaregistro[i].nombre;
    tituloapellido.innerHTML=listaregistro[i].apellido;
    titulocorreo.innerHTML=listaregistro[i].correo;
    tbody.appendChild(fila);
    }
}

function RegistrarDatos(){

    var nom=txtNom.Value;
    var ape=txtApe.value;
    var cor=txtCor.value;

    Registrar(nom,ape,cor);
    MostrarRegistro();
}

// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// });
//creamos un procedimiento para el mensaje
// function Mensaje(){
//     alert("Hola");
// }
// //agregamos el evento al boton
// btnRegistrar.addEventListener("click",Mensaje);
//asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",Registrar);