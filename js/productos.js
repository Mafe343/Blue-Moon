const IVA = 1.25
let clientName

// function saludo () {
//   let nombre = prompt ('Por favor ingresa tu nombre')

//   if (nombre == "") {
//     Swal.fire('No ingresaste tu nombre')
//     console.log('El usuario no ingreso su nombre')
//   } else {
//     Swal.fire(nombre + ' Bienvenido a Blue Moon')
//     clientName = nombre
//   }
// }

// saludo();

class Producto {
  constructor (nombre, precio, description) {
    this.nombre = nombre;
    this.precio = precio;
    this.description = description;
  }

  getPriceIva () { 
    return this.precio * IVA;
  }
}



const products = [];

products.push(new Producto("Expresso", 1500, "Consta de una infusión de café la cual se realiza hirviendo agua en contacto con el grano."))
products.push(new Producto("Ristretto", 2800, "Se caracteriza por tener la misma cantidad de café que el Expresso pero emplear para ello una proporción menor de agua."))
products.push(new Producto("Mocca", 3000, "Llamamos cortado o macchiato a un tipo de café espresso a la cual se le agrega una ligera cantidad de leche, que manche o tiña el café."))
products.push(new Producto("Mocca", 2500, "Además de leche y café se emplea obligatoriamente chocolate o cacao en forma de sirope o polvo."))
products.push(new Producto("Frappe", 1000, "El frappé se elabora con café instantáneo molido, hielo y crema de leche o nata."))


function buscar() {
  const search = document.getElementById("product").value
  // let selectedProduct 
  // for (const product of products) {
  //   if (product.nombre == search) {
  //     selectedProduct = product
  //     break
  //   }
  // }
  let selectedProduct = products.find(product => product.nombre == search)
  if (selectedProduct) {
    Swal.fire(clientName + ' el precio iva incluido es: ' + selectedProduct.getPriceIva() + " " + " Descripcion: " + selectedProduct.description)
  } else {
    Swal.fire("Tu producto no se encuentra en la lista")
  }
}



// Dividir Cuenta

$("#button-datos").on('click', () => {
  let precio = document.getElementById("value").value
  let NPersonas = document.getElementById("personas").value
  console.log ("Se desea dividir " + precio + " en " + NPersonas + " personas.")

  if (precio == "") {
    Swal.fire("Por favor ingresa un valor")
  } else {
    Swal.fire("Cada persona debe pagar:" + " $" + dividirCuenta (precio,NPersonas))
  }
})

function dividirCuenta (precio,NPersonas) {
  return precio / NPersonas
}


$("#button-datos").append("<p>Dividir</p>")
