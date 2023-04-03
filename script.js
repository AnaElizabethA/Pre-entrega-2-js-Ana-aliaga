function saludoInicial(nombre, apellido){
    console.log(nombre)
    if (!nombre && !apellido) {
        alert("NO SE RECONOCE EL USUARIO")
    } else {
        alert("BIENVENID@" + " " + nombre + " " + apellido + " " + "a ARRIMOS MORALES")  
    } 
}

let nombrePersona = prompt ("INGRESE USUARIO")
saludoInicial (nombrePersona , ".")

let products = [
  {id:1 ,modelo: "diana" ,categoria: "arrimos" ,precio: "27990" ,stock: "5"},
  {id:2 ,modelo: "isabela" ,categoria: "arrimos" ,precio: "29990" ,stock: "3"},
  {id:3 ,modelo: "tradicional" ,categoria: "arrimos" ,precio: "25990" ,stock: "8"},
  {id:4 ,modelo: "invierno" ,categoria: "mesa de centro" ,precio: "59990" ,stock: "4"},
  {id:5 ,modelo: "clasico" ,categoria: "mesa de centro" ,precio: "49990" ,stock: "7"},
  {id:6 ,modelo: "vintage" ,categoria: "mesa de centro" ,precio: "54990" ,stock: "3"},
  {id:7 ,modelo: "gran rack tv" ,categoria: "modulares" ,precio: "87990" ,stock: "6"},
  {id:8 ,modelo: "cajonera bedroom" ,categoria: "modulares" ,precio: "105990" ,stock: "8"},
  {id:9 ,modelo: "rack tv simple" ,categoria: "modulares" ,precio: "49990" ,stock: "6"},
  {id:10 ,modelo: "estante pinito" ,categoria: "personalizados" ,precio: "59990" ,stock: "2"},
  {id:11 ,modelo: "estante mini bar" ,categoria: "personalizados" ,precio: "26990" ,stock: "5"},
  {id:12 ,modelo: "estante clasico" ,categoria: "personalizados" ,precio: "55990" ,stock: "4"}
]

let productos = products.map(product => {
  return new Producto(product.id, product.modelo, product.categoria, product.precio, product.stock)
})
let carrito = []

let listaProductos = "Ingrese el numero de la opcion que desea ver: \n0: para salir\n1: para mostrar todos los modelos \n2: escogerlos por categoria \n3: escogerlos por precio \n4: para ver la cantidad de stock."
 + productos.map(producto => producto.id + " " + producto.nombre).join('\n')
 
let opcion
do {
  opcion = Number(prompt(listaProductos))
  let productoBuscado = productos.find(producto => producto.id === opcion)
  if (productoBuscado) {
    let posicionProductoBuscado = carrito.findIndex(producto => producto.id === productoBuscado.id)
    if (posicionProductoBuscado != -1) {
      carrito[posicionProductoBuscado].cantidadUnidades++
      carrito[posicionProductoBuscado].subtotal = carrito[posicionProductoBuscado].precioUnidad * carrito[posicionProductoBuscado].cantidadUnidades
    } else {
      carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        cantidadUnidades: 1,
        precioUnidad: productoBuscado.precio,
        subtotal: productoBuscado.precio
      })
    }
  }
  console.log(carrito)
} while (opcion != 0)




// envio()
function envio() {
  if (total >= 10000) {
    alert("El envio es gratuito")
  } else {
    total += 1000
    alert("el costo de envio es de 1000, el total es: " + total)
  }
}

function metodoDePago() {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + total)
  }

}

envio ()

metodoDePago ()




