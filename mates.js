const PI=3.1416;

function sumar(x1,x2)
{
  return x1+x2;
}
 
function restar(x1,x2)
{
  return x1-x2;
}

function multiplicar(x1,x2)
{
  return x1*x2;
}
 
function dividir(x1,x2)
{
  if (x2==0)
  {
    mostrarErrorDivisio();
  }
  else
  {
    return x1/x2;
  }
}
 
function mostrarErrorDivisio() {
  console.log('Error en dividir entre zero!');
}
 
exports.sumar=sumar;
exports.restar=restar;
exports.multiplicar=multiplicar;
exports.dividir=dividir;

exports.PI=PI; 
