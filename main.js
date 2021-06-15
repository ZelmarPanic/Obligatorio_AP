var personas=[];

function ocultarDiv() {
    var contenedor = document.getElementById("contenedor2");
    contenedor.style.display = "none";
}   //corecto

function Ingresar() {
    var ingresar = document.getElementById("contenedor2")
    if (ingresar.style.display === "block") {
        ingresar.style.display = "none";
    } else {
        ingresar.style.display = "block";
    }
}   //corecto

function registrar(){
     
	var datos_Persona =
    {
		"Usuario":"",
		"Correo":"",
		"password":"",
    }

	datos_Persona["Usuario"] = $("#Usuario").val();
	datos_Persona["Correo"] = $("#Correo").val();
	datos_Persona["password"] = $("#password").val();
	
	personas[personas.length]= datos_Persona;

	alert("La persona fue agregada");
    console.info(datos_Persona);
    
     //corecto
     console.log(datos_persona)
}
function logearse(){

    if (document.form.password.value=='password' && document.form.login.value=='Usuario'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Por favor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    }   //malo