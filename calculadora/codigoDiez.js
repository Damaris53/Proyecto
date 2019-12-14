function multiplicar(){
  var argUno=document.getElementById('arg1').value;
  var argDos=document.getElementById('arg2').value;
  var ProcesoMultiplecar=(argUno * argDos);
  document.getElementById(' resultado').innerHTML=argUno + ' multiplicado por '+ argDos + 'da un total de' + ProcesoMultiplecar;
}
