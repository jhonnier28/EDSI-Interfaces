import {Component} from '@angular/core'

@Component({
        selector:'paises',
        template:`<div>
                        <ul class="nav nav-tabs">
                            <li><a (click)="pais='Colombia'" >Colombia</a></li>
                            <li><a (click)="pais='Ecuador'">Ecuador</a></li>
                            <li><a (click)="pais='Peru'">Peru</a></li>
                            <li><a (click)="pais='Argentina'">Argentina</a></li>
                        </ul>
                  <div> 
                  <div [ngSwitch]="pais">
                       <div *ngSwitchCase="'Colombia'">Informacion de Colombia  </div>
                       <div *ngSwitchCase="'Ecuador'">Informacion de Ecuador   </div>
                       <div *ngSwitchCase="'Peru'"> Informacion de Peru  </div>
                       <div *ngSwitchCase="'Argentina'">Informacion de Argentina   </div>
                       <div *ngSwitchDefault>Seleccione un pais</div>
                  </div>
                  `

})

export class PaisesComponent{
    pais: string;


}