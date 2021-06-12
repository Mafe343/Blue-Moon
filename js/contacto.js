//Entregable DOM y localstorage

const d = document

function buildDOM(elementoPadre, metatag) {
   const el = d.getElementById(elementoPadre)
         el.appendChild(metatag)
}

const inputNombre = d.createElement("input")
      inputNombre.id ="nombre"
      inputNombre.type = "text"
      inputNombre.placeholder = "Ingresa tu nombre"
      inputNombre.classList.add("form-control")
      inputNombre.classList.add("my-2")
      buildDOM("formulario", inputNombre)

const inputEdad = d.createElement("input")
      inputEdad.id ="edad "
      inputEdad.type = "number"
      inputEdad.placeholder = "Ingresa tu edad"
      inputEdad.classList.add("form-control")
      inputEdad.classList.add("my-2")
      buildDOM("formulario", inputEdad)

const inputEmail = d.createElement("input")
      inputEmail.id ="email "
      inputEmail.type = "email"
      inputEmail.placeholder = "Ingresa tu correo electrónico"
      inputEmail.classList.add("form-control")
      inputEmail.classList.add("my-2")
      buildDOM("formulario", inputEmail)

const inputNumeroContacto = d.createElement("input")
      inputNumeroContacto.id ="NumeroContacto "
      inputNumeroContacto.type = "number"
      inputNumeroContacto.placeholder = "Ingresa tu número de contacto"
      inputNumeroContacto.classList.add("form-control")
      inputNumeroContacto.classList.add("my-2")
      buildDOM("formulario", inputNumeroContacto)
      
      const buttonGuardar = d.createElement("button")
            buttonGuardar.id = "btnGuardar"
            buttonGuardar.innerText = "GUARDAR"
            buttonGuardar.type = "Submit"
            buttonGuardar.classList.add("btn")
            buttonGuardar.classList.add("bg-info")
            buildDOM("formulario", buttonGuardar)

            buttonGuardar.onclick = guardarDatos;
            

function guardarDatos() {
   const camposForm = {nombre: "", edad: 0, email: "", NumeroContacto: 0,}
         camposForm.nombre = inputNombre.value
         camposForm.edad = inputEdad.value 
         camposForm.email = inputEmail.value
         camposForm.NumeroContacto = inputNumeroContacto.value
         sessionStorage.setItem("camposForm", JSON.stringify(camposForm))

    if (camposForm.nombre == "") {
        Swal.fire('Por favor ingresa tus datos')
    } else {
        Swal.fire("Tus datos se han enviado con exito")
    }
}

function recuperarDatos() {
   if (sessionStorage.camposForm != undefined) {
      const camposForm = JSON.parse(sessionStorage.getItem("camposForm"))
            inputNombre.value = camposForm.nombre
            inputEdad.value = camposForm.edad
            inputEmail.value = camposForm.email 
            inputNumeroContacto.value = camposForm.NumeroContacto
    }
}