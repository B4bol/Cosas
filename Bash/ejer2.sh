# Escribe un script q multiplique sume reste y divida dos numeros (read)

read -p "Primer numero: " num1
read -p "Segundo numero: " num2

let suma=$num1+$num2
let resta=$num1-$num2
let multi=$num1*$num2
let div=$num1/$num2

echo $suma
echo $resta
echo $multi
echo $div