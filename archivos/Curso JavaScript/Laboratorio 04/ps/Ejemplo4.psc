Algoritmo Ejemplo4
	//definiendo variables
	Definir can como entero;
	Definir pre, sbt, des, igv, tot como real;
	Definir cat, com como texto;
	//inicializando variables
	can=0; pre=0; sbt=0; des=0; igv=0; tot=0; cat=""; com="";
	//capturando valores
	Escribir "Ingresa la cantidad a comprar:";
	Leer can;
	Escribir "Ingresa el precio del producto:";
	Leer pre;
	Escribir "Ingresa la categoría:";
	Leer cat;
	Escribir "Ingresa el tipo de comrpobante [f]Factura o [b]Boleta:";
	Leer com;
	//realizando operaciones
	sbt=can*pre;
	//condicion
	si (cat="d") Entonces
		des=sbt*0.07;
	SiNo
		des=sbt*0.03;
	FinSi
	
	si (com="f") Entonces
		igv=sbt*0.18;
	SiNo
		igv=0;
	FinSi
	tott=sbt-des+igv;
	//mostrando resultados
	escribir "El subtotal es: ",sbt;
	escribir "El descuento es: ",des;
	escribir "El igv es: ",igv;
	escribir "El total es: ",tot;
FinAlgoritmo
