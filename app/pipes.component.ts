import {Component} from '@angular/core'

@Component({
    selector: 'pipes',
    template:`<div>
                 <span>cadena:{{cadena | uppercase}}</span>   
                 <br/>
                 <span>cadena:{{cadena | lowercase}}</span>   
                 <br/>
                 <span>Fecha:{{fecha | date:'fullDate'}}</span> 
                 <br/>
                 <span>Pago:{{pago | number:'4.2-2'}}</span>  
                 <br/>
                 <span>Pago:{{pago | currency:'COP':true}}</span>    
                 <br/>
                 <span>Pago:{{listado | json}}</span>    
              <div> `
    
})
export class PipesComponent
{
   cadena: string ="Carlos castro";
   valor: number = 30;
   fecha: Date = new Date(1999,19,1);
   pago:number=1233.34;
   listado: any = [{nombre: 'Juan', edad:11},
                   {nombre: 'Carlos', edad:11}];
}