const productos = [
    {nombre: "harina 000", precio: 113},
    {nombre: "levadura seca 125 gr ", precio: 450},
    {nombre: "harina 0000", precio: 140},
    {nombre: "manteca inty 5 kg", precio: 6800},
    {nombre: "grasa vacuna essani 500 gr", precio: 300},
    {nombre: "chocolate semiamargo repostería 1 kg", precio: 970},
    {nombre: "dulce de leche  repostero 4 kg", precio: 2800},
    {nombre: "moldes p/pd 1 kg", precio: 34},
    {nombre: "moldes p/pd 1/2 kg", precio: 28},
    {nombre: "azucar charango 1kg", precio: 230},
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

    seleccion =prompt("¿Desea seguir comprando?")

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