# Mediass

# Echo para mostrar por pantalla "Introduce 3 nuemeroh:"
echo Introduce 3 nuemeroh:

# Read sirve para almacenar en variables los datos del usuario
read num1
read num2
read num3

# "let" sirve para operar con variables
let total=($num1+$num2+$num3)/3

# "if" lo usamos para condicion el operador "-ge" significa mayor que
# por lo que dependiendo de total saldra una cosa u otra.

# if [[ $total -ge 9 ]]; then
# 	echo SOBRESALIENTE
# elif [[ $total -ge 7 ]]; then
# 	echo NOTABLE
# elif [[ $total -ge 5 ]]; then
# 	echo APROBADO
# else echo SUSPENSO
# fi

# Case es como el if solo que con casos concretos y el asterisco del final
# es para cualquier otra cosa que no sean los numeros definidos que en
# este caso son (10, 9, 8, 7, 6, 5)
case $total in
	10 )
		echo "GENIO";;
	9 )
		echo "GENIO";;		
	8 )
		echo "GENIO";;
	7 )
		echo "GENIO";;
	6 )
		echo "GENIO";;
	5 )
		echo "GENIO";;
	* )
		echo "MARICON";;
esac