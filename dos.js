/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas (si)
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let categoria;
	let precio;
	let nombre;
	let respuesta = "s"
	let flag = 0;
	let flagl = 0;
	let preciomax;
	let preciomaxl
	let nombremax;
	let nombremaxl;
	let cantbebidas = 0;

	while (respuesta == "s") {
		nombre = prompt("Ingrese un articulo");
		do {
			categoria = prompt("Ingresar categoria");
		} while (!(categoria == "Almacen" || categoria == "Limpieza" || categoria == "Bebidas" || categoria == "Lacteos"));

		do {
			precio = parseInt(prompt("Ingresar un precio"))
		} while (!(precio >= 0 && precio <= 1000));
		if (flag == 0 || precio > preciomax) {
			preciomax = precio;
			nombremax = nombre;
			flag = 1
		}
		if ((flag == 0 && categoria == "Lacteos") || (categoria == "Lacteos" && precio > preciomax)) {
			preciomaxl = precio;
			nombremaxl = nombre;
			flagl = 1;

		}
		if (categoria == "Bebidas") {
			cantbebidas++
		}

		respuesta = prompt("Ingresa otro?");
	}







	document.write("El nombre del art con mayor precio es: " + nombremax + "<br>");

	document.write("El nombre del art con mayor precio de lact es: " + nombremaxl + "<br>");

	document.write("Cantidad de art de bebidas: " + cantbebidas + "<br>");





}