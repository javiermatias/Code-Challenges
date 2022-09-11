let producto;

function Producto(nombre,precio,iva,descuento){
    this.nombre=nombre.toUpperCase();
    this.precio=parseInt(precio);
    this.iva=parseInt(iva);
    this.descuento=parseInt(descuento);
    this.calculo = function () {

        let Iva = (this.precio * this.iva) / 100;
        let precioConIva = this.precio + Iva;
        let descuento = (precioConIva * this.descuento) / 100;
        let precioTotal = precioConIva - descuento;
        return document.write("producto seleccionado: " + "<br>" + "<b>" + this.nombre + "<br>" + "</b>" + " Precio: $" + "<b>" + this.precio + "</b>" + "<br>" + "El precio mas el iva del 21% es: $" + "<b>" + precioConIva + "<br>" + "</b>" + "El precio con el descuento del 30% es: $" + "<b>" + precioTotal + "</b>");
    }
}



while (producto != "televisor" || producto != "notebook" || producto != "silla gamer") {
    
    producto = prompt("ingrese un producto: televisor, notebook, silla gamer");

    switch (producto) {
        case "televisor":
            let televisor = new Producto("Smart TV Samsumg 51'", 85000, 21, 30);
            console.log(televisor.calculo());
            break;
        case "notebook":
            let notebook = new Producto("Notebook HP 5200 series I7", 110000, 21, 15);
            console.log(notebook.calculo());
            break;
        case "silla gamer":
            let sillaGamer = new Producto(" Silla Gamer Red Dragon", 55050, 21, 10);
            console.log(sillaGamer.calculo())
            break;
        default:
            alert("no se ingreso un producto valido");
            break;
    }

    ingreseNuevamente = prompt("desea ingresar un producto nuevamente? si o no,")
    if (ingreseNuevamente != "si") {
        alert("gracias por utilizar nuestros servicios")
        break;
    }
}