const productos = [
    {id: 1, nombre: "harina 000", precio: 113},
    {id: 2, nombre: "levadura seca 125 gr ", precio: 450}, 
    {id: 3, nombre: "harina 0000", precio: 140},
    {id: 4, nombre: "manteca inty 5 kg", precio: 6800},
    {id: 5, nombre: "grasa vacuna essani 500 gr", precio: 300},
    {id: 6, nombre: "chocolate semiamargo repostería 1 kg", precio: 970},
    {id: 7, nombre: "dulce de leche  repostero 4 kg", precio: 2800},
    {id: 8, nombre: "moldes p/pd 1 kg", precio: 34},
    {id: 9, nombre: "moldes p/pd 1/2 kg", precio: 28},
    {id: 10, nombre: "azucar charango 1kg", precio: 230},
    {id: 11, nombre: "queso cremoso 1kg", precio: 1000},
    {id: 12, nombre: "sal 500 gr", precio: 90},
    {id: 13, nombre: "azucar empalpable 250 gr", precio: 240}

];
let carrito = []

let seleccion = prompt("Hola, ¿desea comprar algún productos? ¿si o no?")

while(seleccion !="si" && seleccion != "no"){
    alert("por favor, ingresa si o no")
    seleccion = prompt("hola, ¿desea comprar algo? ¿si o no?")
}

if (seleccion == "si"){
    alert("a continuación, se verá la lista de productos")
    let todoslosProductos = productos.map((producto) => producto.id + ". " + producto.nombre + ", "+ "$" + producto.precio  
    );
    alert(todoslosProductos.join(" \n" ))
}   else if (seleccion == "no"){
    alert("Gracias por venir, hasta prontos!!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "harina 000" || producto == "harina 0000" || producto == "levadura seca 125 gr"|| producto == "manteca inty 5 kg" || producto == "grasa vacuna essani 500 gr" || producto=="chocolate semiamargo repostería 1 kg" || producto == "dulce de leche  repostero 4 kg" || producto == "moldes p/pd 1 kg" || producto == "moldes p/pd 1/2 kg" || producto== "azucar charango 1kg" || producto == "queso cremoso 1kg" || producto == "sal 500 gr" || producto=="azucar empalpable 250 gr"){
        switch (producto){
            case "harina 000":  
                precio = 113;
                break;
            case "harina 0000":
                precio = 140;
                break;
            case "levadura seca 125 gr":
                precio = 450;
            case "manteca inty 5 kg":
                precio = 6800;
            case "grasa vacuna essani 500 gr":
                precio = 300;
                break;
            case "chocolate semiamargo repostería 1 kg":
                precio= 970;
            case "dulce de leche  repostero 4 kg":
                precio =2800;
                break;
            case "moldes p/pd 1 kg":
                precio = 34;
                break;
            case "moldes p/pd 1/2 kg":
                precio = 28;
                break;
            case "azucar charango 1kg":
                precio = 230;
                break;
            case "queso cremoso 1kg":
                precio = 1000;
                break;
            case "sal 500 gr":
                precio=90;
                break;
            case "azucar empalpable 250 gr":
                precio = 240;
                break;
            default:
                break;
        }

    let unidades =parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({producto,unidades,precio})
    console.log(carrito)
    } else {
    alert("no tenemos ese producto")
    }

    seleccion =prompt("¿Desea seguir comprando? Escriba la palabra 'si' o 'no'")

    while (seleccion ==="no"){
        alert("gracias por la compra! hasta luego")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto:  ${carritoFinal.unidades * carritoFinal.precio}  pesos argentinos`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es:  ${total}`);