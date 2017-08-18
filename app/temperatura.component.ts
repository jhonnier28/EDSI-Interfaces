import {Component} from '@angular/core'

@Component({
        selector:'temperatura',
        template:`<span>La temperatura es: </span>
                  <span [ngClass]="{'btn-danger':valor>30, 'btn-warning':valor<20}">{{valor}}</span>
                  <br/>
                  <span>La temperatura en grados Farenheit es: {{valor | farenheit}}</span>
                  `

})

export class TemperaturaComponent{
    valor: number =10;
}

