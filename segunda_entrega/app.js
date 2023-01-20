
//SEGUNDA ENTREGA 
// Ejemplo
// subir datos a Producto, soy el dueño de la distribuidora de productos para panadería y necesito subir los nuevos artículos que me ingresan al deposito.

class Producto{
    constructor(nreg, producto, marca, precio, pesokg){
        this.nreg= nreg;
        this.producto=producto;
        this.marca=marca;
        this.precio=precio;
        this.pesokg=pesokg;
    }
}
const productos = []

productos.push(new Producto ( 1, "harina 000", "balaton", 113, 1))
productos.push(new Producto (2, "levadura seca 125 gr ","cruz del sur",  450, 0.125))
productos.push(new Producto (3, "harina 0000","molinos", 140, 1))
productos.push(new Producto (4, "manteca", "inty", 6800, 5))
productos.push(new Producto (5, "grasa vacuna 500 gr","essani", 300, 0.5))
productos.push(new Producto (6, "chocolate semiamargo repostería 1 kg","chipis", 970, 1))
productos.push(new Producto (7, "dulce de leche  repostero 4 kg","arcor", 2800, 4))
productos.push(new Producto ( 8, "moldes p/pd 1 kg", "segyr",34, 1))
productos.push(new Producto ( 9,  "moldes p/pd 1/2 kg", "segur" , 28, 0.5))
productos.push(new Producto ( 10,  "azucar charango 1kg", "celibe", 230, 1))
productos.push(new Producto ( 11,  "queso cremoso 1kg", "la paulina", 1000, 1))
productos.push(new Producto ( 12,  "sal 500 gr", "salina", 90, 0.5))
productos.push(new Producto ( 13,  "azucar empalpable 250 gr", "artesano",240, 0.25))


console.log (productos)
alert("ingrese los datos de cada producto en el siguiente orden, separando cada categoría con el signo', ' (signo coma)")

// let pregunta = new productos (prompt("Ingresa el nombre del producto"), Number(prompt("Ingrese id del producto")), String(prompt("Ingresa el nombre de la marca del producto"), Number(prompt("Ingrese el precio del producto"),Number(prompt("Indique el peso en kg del producto"))))
// )
let nuevoIngreso = 0
while (nuevoIngreso <1){
        let pregunta = new Producto (prompt("Ingresa el nombre del producto"), 
                        Number(prompt("Ingrese id del producto")), 
                        String(prompt("Ingresa el nombre de la marca del producto")), 
                        Number(prompt("Ingrese el precio del producto")),
                        Number(prompt("Indique el peso en kg del producto")))
        productos.push(pregunta)
    nuevoIngreso++

}
console.log(productos)