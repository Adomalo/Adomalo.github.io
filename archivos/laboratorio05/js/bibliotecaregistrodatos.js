var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var tbRegistro=document.getElementById("tbRegistro");

// function writeUserData(nm, ap, cr) {
//     database.ref('registro/').set({
//         nombre: nm,
//         apellido: ap,
//         correo: cr
//     });
// }
function Buscar(codigo){
    //selecionamos la tabla
    var db=database.ref().child("registro");
    db.once("value").then(function (snapshot){
        snapshot.forEach(function (data){
            //declaramos una variable para el codigo de la tabla
            var key=data.key;
            //evaluamos que el key de la tabla sea igual al codigo buscado
            if (key==codigo){
                var cod=key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;
                //enviamos los datos a los controles
                txtCod.value = cod;
                txtNom.value = nom;
                txtApe.value = ape;
                txtCor.value = cor;
            }
        })
    })
}

function Limpiar(){
    txtNom.value="";
    txtApe.value="";
    txtCor.value="";
    txtNom.focus();
}

function Mostrar(){
    var i = 0;
    tbody = document.querySelector("#tbRegistro tbody");
    tbody.innerHTML = "";

    var db = database.ref().child("registro");
    db.once("value",function (snapshot) {
        if (snapshot.exists()) {
            snapshot.forEach(function (data){
                var nom = data.val().nombre;
                var ape = data.val().apellido;
                var cor = data.val().correo;

                var fila = tbody.insertRow(i);
                
                var titulonombre = fila.insertCell(0);
                var tituloapellido = fila.insertCell(1);
                var titulocorreo = fila.insertCell(2);
                var tituloact = fila.insertCell(3);
                var titulocor = fila.insertCell(4);

                titulonombre.innerHTML = nom;
                tituloapellido.innerHTML = ape;
                titulocorreo.innerHTML = cor;
                tituloact.innerHTML =
          "<a href='#' onclick=Buscar('" + cod + "')>Seleccionar</a>";
        titulocor.innerHTML = "<a href='#'>Seleccionar</a>";

                tbody.appedChild(fila);
                i++;
            });
        }
    });
}


function Registrar(){
    if(txtNom.value=="" || txtNom.value==null){
        alert("Ingrese su nombre");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        alert("Ingresa su apellido");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        alert("Ingrese su correo");
        txtCor.focus();
    }else{
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;
        
        var db=database.ref('registro');

        var registros=db.push();

        registros.set({
            'nombre': nom,
            'apellido': ape,
            'correo': cor,
        });
        alert("Se registro los datos");
        Limpiar();
        Mostrar();
    }
}
//creamos el procedimiento para actualizar
function Actualizar(){
    //capturando valores
    var cod=txtCod.value;
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //seleccionamos la tabla que vamos actualizar con su codigo correspondiente
    var db=database.ref("registro/" + cod);
    //le pasamos losd atos que vamos actualizar
    db.update({
        nombre: nom,
        apellido: ape,
        correo: cor,
    });
    alert("Se actualizo el dato");
    //llamamos al procedimiento limpiar
    Limpiar();
    //llamamos al procedimiento mostrar
    Mostrar();
}
//creamos un procedimiento para eliminar
function Eliminar(codigo){
    //preguntamos si se quiere eliminar
    var result=confirm("¿Estas seguro que quieres eliminar el registro?");
    //evaluamos la respuesta
    if(result){
        //pasamos el codigo el registro que se va a eliminar
        var cod=codigo;
        //seleccionamos la tabla con el codigo correspondienta para eliminarla
        var db=database.ref("registro/" + cod).remove();
        alert("Se elimino el dato");
        //llamamos a la funcion limpiar
        Limpiar();
        //llamamos a la funcion mostrar
        Mostrar();
    }
}
//llamamos a la funcion registrar en el boton
btnRegistrar.addEventListener("click",Registrar);
btnActualizar.addEventListener("click",Actualizar);
