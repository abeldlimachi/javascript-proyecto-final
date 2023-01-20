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

productos.push(  new Producto ( 1, "harina 000", "balaton", 113, 1))
productos.push(    new Producto (2, "levadura seca 125 gr ","cruz del sur",  450, 0.125))
productos.push(    new Producto (3, "harina 0000","molinos", 140, 1))
productos.push(    new Producto (4, "manteca", "inty", 6800, 5))
productos.push(   new Producto (5, "grasa vacuna 500 gr","essani", 300, 0.5))
productos.push(    new Producto (6, "chocolate semiamargo repostería 1 kg","chipis", 970, 1))
productos.push(    new Producto (7, "dulce de leche  repostero 4 kg","arcor", 2800, 4))
productos.push(     new Producto ( 8, "moldes p/pd 1 kg", "segyr",34, 1))
productos.push(     new Producto ( 9,  "moldes p/pd 1/2 kg", "segur" , 28, 0.5))
productos.push(     new Producto ( 10,  "azucar charango 1kg", "celibe", 230, 1))
productos.push(     new Producto ( 11,  "queso cremoso 1kg", "la paulina", 1000, 1))
productos.push(     new Producto ( 12,  "sal 500 gr", "salina", 90, 0.5))
productos.push(     new Producto ( 13,  "azucar empalpable 250 gr", "artesano",240, 0.25))


// const productosAVender = []
// productosAVender.push(prod1,prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12, prod13)

console.log (productos)

// let seleccion = prompt("Hola, ¿desea comprar algún productos? ¿si o no?")

// while(seleccion !="si" && seleccion != "no"){
//     alert("por favor, ingresa si o no")
//     seleccion = prompt("hola, ¿desea comprar algo? ¿si o no?")
// }

// if (seleccion == "si"){
//     alert("a continuación, se verá la lista de productos")
//     let todoslosProductos = productos.map((producto) => producto.id + ". " + producto.nombre + ", "+ "$" + producto.precio  
//     );
//     alert(todoslosProductos.join(" \n" ))
// }   else if (seleccion == "no"){
//     alert("Gracias por venir, hasta prontos!!")
// }

// while(seleccion != "no"){
//     let producto = prompt("agrega un producto a tu carrito")
//     let precio = 0

//     if (producto == "harina 000" || producto == "harina 0000" || producto == "levadura seca 125 gr"|| producto == "manteca inty 5 kg" || producto == "grasa vacuna essani 500 gr" || producto=="chocolate semiamargo repostería 1 kg" || producto == "dulce de leche  repostero 4 kg" || producto == "moldes p/pd 1 kg" || producto == "moldes p/pd 1/2 kg" || producto== "azucar charango 1kg" || producto == "queso cremoso 1kg" || producto == "sal 500 gr" || producto=="azucar empalpable 250 gr"){
//         switch (producto){
//             case "harina 000":
//                 precio = 113;
//                 break;
//             case "harina 0000":
//                 precio = 140;
//                 break;
//             case "levadura seca 125 gr":
//                 precio = 450;
//             case "manteca inty 5 kg":
//                 precio = 6800;
//             case "grasa vacuna essani 500 gr":
//                 precio = 300;
//                 break;
//             case "chocolate semiamargo repostería 1 kg":
//                 precio= 970;
//             case "dulce de leche  repostero 4 kg":
//                 precio =2800;
//                 break;
//             case "moldes p/pd 1 kg":
//                 precio = 34;
//                 break;
//             case "moldes p/pd 1/2 kg":
//                 precio = 28;
//                 break;
//             case "azucar charango 1kg":
//                 precio = 230;
//                 break;
//             case "queso cremoso 1kg":
//                 precio = 1000;
//                 break;
//             case "sal 500 gr":
//                 precio=90;
//                 break;
//             case "azucar empalpable 250 gr":
//                 precio = 240;
//                 break;
//             default:
//                 break;
//         }

//     let unidades =parseInt(prompt("cuantas unidades quiere llevar"))

//     carrito.push({producto,unidades,precio})
//     console.log(carrito)
//     } else {
//     alert("no tenemos ese producto")
//     }

//     seleccion =prompt("¿Desea seguir comprando? Escriba la palabra 'si' o 'no'")

//     while (seleccion ==="no"){
//         alert("gracias por la compra! hasta luego")
//         carrito.forEach((carritoFinal) => {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto:  ${carritoFinal.unidades * carritoFinal.precio}  pesos argentinos`)
//         })
//     break;
//     }
// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
// console.log(`El total a pagar por su compra es:  ${total}`);