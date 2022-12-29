const productos = [
    {nombre: "harina 000", precio: 113},
    {nombre: "levadura seca 125 gr ", precio: 450},
    {nombre: "harina 0000", precio: 140},
    {nombre: "manteca inty 5 kg", precio: 6800},
    {nombre: "grasa vacuna essani 500 gr", precio: 300},
    {nombre: "chocolate semiamargo repostería 1 kg", precio: 970},
    {nombre: "dulce de leche  repostero 4 kg ", precio: 2800},
    {nombre: "moldes p/pd 1 kg", precio: 34},
    {nombre: "moldes p/pd 1/2 kg", precio: 28},
    {nombre: "azucar charango 1kg", precio: 230},
    {nombre: "harina 000", precio: 113},
    {nombre: "queso cremoso 1kg", precio: 1000},
    {nombre: "sal 500 gr", precio: 90},
    {nombre: "azucar empalpable 250 gr", precio: 240}

];
let carrito = []

let seleccion = prompt("Hola, ¿desea comprar algún productos? ¿si o no?")

while(seleccion !="si" && seleccion != "no"){
    alert("por favor, ingresa si o no")
    seleccion = prompt("hola, ¿desea comprar algo? ¿si o no?")
}

if (seleccion == "si"){
    alert("a continuación, se verá la lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$" 
    );
    alert(todoslosProductos.join(" - " ))
}   else if (seleccion == "no"){
    alert("Gracias por venir, hasta prontos!!")
}