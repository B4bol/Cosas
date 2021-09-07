# Ecribe un script que calcule la media aritmetica de dos numeros introducidos por teclado

read -p "Primer numero: " num1
read -p "Segundo numero: " num2
read -p "Tercer numero: " num3

let total=(num1+num2+num3)/3

echo $total