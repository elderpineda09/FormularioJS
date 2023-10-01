let usuario = document.getElementById("user");
let password = document.getElementById("password");
let verificar = document.getElementById("ingresar");

verificar.addEventListener('click',validar);
function validar(){
    event.preventDefault();
        if (usuario.value == "admin" && password.value == "admin123") {
           
            Swal.fire({
                icon: "success",
                title: "El usuario ha ingresado con éxito",
                text: "",
                showConfirmButton: true,
                confirmButtonText: "OK",
                closeOnConfirm: false
            });

        }else{
            Swal.fire({
            icon: "error",
            title: "¡Usuario o contraseña incorrectos!",
            text: "",
            showConfirmButton: true,
            confirmButtonText: "Cerrar",
            closeOnConfirm: false
        });

        } 
    }

