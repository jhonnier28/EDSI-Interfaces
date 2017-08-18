import {Component, Input} from '@angular/core'
import {Materia} from './estudiantes'


@Component({
    selector: 'materias',
    template: `
                <div *ngIf="listaMaterias && listaMaterias.length">
                <h3>Listado de materias</h3>
               <table class="table table-striped">
                    <tr>
                        <td>posicion</td>
                        <td>Id</td>
                        <td>Nombre</td>
                        <td>Semestre</td>
                    </tr>
                    <tr *ngFor="let materia of listaMaterias let i=index">
                        <td>{{i}}</td>    
                        <td>{{materia.id}}</td>
                        <td>{{materia.nombre}}</td>
                        <td>{{materia.semestre}}</td>
                    </tr>
               </table>
               </div>`
})
export class MateriasComponent
{
    @Input('materiasEstudiante') listaMaterias: Array<Materia>;
    constructor(){    
    }
}