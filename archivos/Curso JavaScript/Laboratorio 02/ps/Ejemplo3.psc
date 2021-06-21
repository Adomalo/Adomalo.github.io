Algoritmo Ejemplo3
	definir pre, sbt, igv, tot como real;
	definir can como entero;
	
	pre=0; sbt=0; igv=0; tot=0;
	
	Escribir "Ingresa el precio del producto";
	Leer pre;
	escribir "Ingresa la cantidad a comprar el producto";
	leer can;
	
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	
	Escribir "El subtotal es: ",sbt;
	escribir "El igv es: ",igv;
	escribir "El total es: ",tot;
	
FinAlgoritmo