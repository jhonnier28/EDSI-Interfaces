import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'numeroInvertido'})
export class NumeroInvertido implements PipeTransform{
 transform(valor: number, args: any){
       
    /*----------------------
        Primera forma
     -----------------------*/
    let val = String(valor);
    let valInvertido = "";

    for (let i = val.length-1; i>-1; i--) {
         valInvertido += val[i];
    }
    
    /*----------------------
        Segunda forma
     -----------------------*/
    let n = valor;
    let r = 0;
    let x = 1;

    // determinamos la longitud del numero
    while(n>0){                  
        n=Math.trunc(n/10);
        x=x*10;            
    }
    
    n = valor;
    x=x/10;
    
    //Invertimos el numero
    while(n>0){                  
        console.log('r: '+r+' n:'+n+ ' n%10:'+n%10);     
        console.log('x: '+x);     
        r += (n%10) * x;
        console.log('r after: '+r);     
        n=Math.trunc(n/10);
        x=x/10;            
    }
    return valInvertido;
 }
}




