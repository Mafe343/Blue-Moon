// Calcular precio con iva y descuento de los productos en promoción
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.25;

let expresso = 1500
let ristretto = 2800
let macchiato = 3000
let americano = 2500
let cafeConLeche = 1000
let precioDescuento = 300

function descuento () {
  let productoIngresado = document.getElementById("product").value

  switch(productoIngresado) {
    case 'Expresso':
      let nuevoPrecioUno = resta(suma(expresso, iva(expresso)), precioDescuento);
      Swal.fire("Precio actual: " + expresso + " Iva: 0.25 " + " Descuento: " + precioDescuento + " Valor final: " + nuevoPrecioUno );
  
      console.log(nuevoPrecioUno)
      break
    
    case 'Ristretto':
      let nuevoPrecioDos = resta(suma(ristretto, iva(ristretto)), precioDescuento);
      Swal.fire("Precio actual: " + ristretto + " Iva: 0.25 " + " Descuento: " + precioDescuento + " Valor final: " + nuevoPrecioDos );
      
      console.log(nuevoPrecioDos)
      break
  
    case 'Macchiato':
      let nuevoPrecioTres = resta(suma(macchiato, iva(macchiato)), precioDescuento);
      Swal.fire("Precio actual: " + macchiato + " Iva: 0.25 " + " Descuento: " + precioDescuento + " Valor final: " + nuevoPrecioTres );
      
      console.log(nuevoPrecioTres)
      break
    
    case 'Americano':
      let nuevoPrecioCuatro = resta(suma(americano, iva(americano)), precioDescuento);
      Swal.fire("Precio actual: " + americano + " Iva: 0.25 " + " Descuento: " + precioDescuento + " Valor final: " + nuevoPrecioCuatro);
      
      console.log(nuevoPrecioCuatro)
      break
  
    case 'Cafe con leche':
      let nuevoPrecioCinco = resta(suma(cafeConLeche, iva(cafeConLeche)), precioDescuento);
      Swal.fire("Precio actual: " + cafeConLeche + " Iva: 0.25 " + " Descuento: " + precioDescuento + " Valor final: " + nuevoPrecioCinco );
      
      console.log(nuevoPrecioCinco)
      break
  
    default:
      Swal.fire("Este producto no se encuentra disponible")
      console.log("Producto erróneo")
  }
}