Algoritmo Ejemplo4
	
	definir nh, ch, sb, bon, des, sf como real;
	
	nh=0; ch=0; sb=0; bon=0; des=0; sf=0;
	
	escribir "Ingresa el numero de horas trabajadas:";
	leer nh;
	escribir "Ingrese el costo por hora trabajada:";
	leer ch;
	
	sb=nh*ch;
	bn=sb*0.07;
	des=sb*0.0375;
	sf=sb+bon-des;
	
	Escribir "El sueldo basico es: ",sb;
	Escribir "La bonificacion es: ",bon;
	Escribir "El descuento es: ",des;
	Escribir "El sueldo final es: ",sf;
FinAlgoritmo
