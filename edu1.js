let producto = prompt("ingrese un producto: televisor, notebook, silla gamer");

while (producto != "televisor" || producto != "notebook" || producto != "silla gamer") {

    if (producto == "televisor") {
        function Televisor(producto1, precioTv, iva, descuento1) {
            this.producto1 = producto1.toUpperCase();
            this.precioTv = parseInt(precioTv);
            this.iva = parseInt(iva);
            this.descuento1 = parseInt(descuento1);

            this.calculoProducto1 = function () {

                let precioTelevisorMasIva = (this.precioTv * this.iva) / 100;
                let precioTvConIva = this.precioTv + precioTelevisorMasIva;
                let descuentoTv = (precioTvConIva * this.descuento1) / 100;
                let precioTotalTv = precioTvConIva - descuentoTv;
                return document.write("producto seleccionado: " + "<br>" + "<b>" + this.producto1 + "<br>" + "</b>" + " Precio: $" + "<b>" + this.precioTv + "</b>" + "<br>" + "El precio mas el iva del 21% es: $" + "<b>" + precioTvConIva + "<br>" + "</b>" + "El precio con el descuento del 30% es: $" + "<b>" + precioTotalTv + "</b>");
            }
        }
        let televisor = new Televisor("Smart TV Samsumg 51'", 85000, 21, 30);
        console.log(televisor.calculoProducto1())
        break;
    } else if (producto == "notebook") {
        function Notebook(producto2, precioNotebook, iva, descuento2) {
            this.producto2 = producto2.toUpperCase();
            this.precioNotebook = parseInt(precioNotebook);
            this.iva = parseInt(iva);
            this.descuento2 = parseInt(descuento2);

            this.calculoProducto2 = function () {

                let precioNotebookMasIva = (this.precioNotebook * this.iva) / 100;
                let precioNotebookConIva = this.precioNotebook + precioNotebookMasIva;
                let descuentoNotebook = (precioNotebookConIva * this.descuento2) / 100;
                let precioTotalNotebook = precioNotebookConIva - descuentoNotebook;
                return document.write("producto seleccionado: " + "<br>" + "<b>" + this.producto2 + "<br>" + "</b>" + " Precio $" + "<b>" + this.precioNotebook + "</b>" + "<br>" + "El precio mas el iva del 21% es: $" + "<b>" + precioNotebookConIva + "<br>" + "</b>" + "El precio con el descuento del 30% es: $" + "<b>" + precioTotalNotebook + "</b>");
            }
        }
        let notebook = new Notebook("Notebook HP 5200 series I7", 110000, 21, 15);
        console.log(notebook.calculoProducto2())
        break

    } else if (producto == "silla gamer") {
        function SillaGamer(producto3, precioSillaGamer, iva, descuento3) {
            this.producto3 = producto3.toUpperCase();
            this.precioSillaGamer = parseInt(precioSillaGamer);
            this.iva = parseInt(iva);
            this.descuento3 = parseInt(descuento3);

            this.calculoProducto3 = function () {

                let precioSillaGamerMasIva = (this.precioSillaGamer * this.iva) / 100;
                let precioSillaGamerConIva = this.precioSillaGamer + precioSillaGamerMasIva;
                let descuentoSillaGamer = (precioSillaGamerConIva * this.descuento3) / 100;
                let precioTotalSillaGamer = precioSillaGamerConIva - descuentoSillaGamer;
                return document.write("producto seleccionado: " + "<br>" + "<b>" + this.producto3 + "<br>" + "</b>" + " Precio $" + "<b>" + this.precioSillaGamer + "</b>" + "<br>" + "El precio mas el iva del 21% es: $" + "<b>" + precioSillaGamerConIva + "<br>" + "</b>" + "El precio con el descuento del 30% es: $" + "<b>" + precioTotalSillaGamer + "</b>");
            }
        }
        let sillaGamer = new SillaGamer(" Silla Gamer Red Dragon", 55050, 21, 10);
        console.log(sillaGamer.calculoProducto3())
        break
    } else {
        alert("no se ingreso un producto valido");
    }
    ingreseNuevamente = prompt("desea ingresar un producto nuevamente? si o no,")
    if (ingreseNuevamente == "si") {
        producto = prompt("ingrese un producto: televisor, notebook, silla gamer");

    } else if (ingreseNuevamente == "no") {
        alert("gracias por utilizar nuestros servicios")
        break
    }
}