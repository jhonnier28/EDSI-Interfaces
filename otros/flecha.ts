var numeros: Array<number> = [1,2,3,4,5,6,7,8];
var incremento: Array<number>;



  incremento = numeros.map( n => n+1);
  console.log(incremento);
  
  numeros.forEach((valor, posicion, vector) => {console.log(`La posicion ${posicion}: tiene el valor: ${valor}`)});

