Algoritmo Ejemplo1
	//definiendo variables
	definir est como entero;
	definir men como texto;
	est=0; men="";
	//capturando valores
	escribir "Ingrese el n�mero de estacion 1 o 2 o 3 o 4";
	Leer  est;
	//condicion
	si(est=1) Entonces
		men="Verano";
	SiNo
		si(est=2) Entonces
			men="Oto�o";
		SiNo
			si(est=3) Entonces
				men="Invierno";
			SiNo
				si(est=4) Entonces
					men="Primavera";
				SiNo
					men="No es una numero valido" ;
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir "La estaci�n es: ",men;
FinAlgoritmo
