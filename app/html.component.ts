import {Component} from '@angular/core'
import {Estudiante, Materia} from './estudiantes'

@Component({
        selector:'html',
        template: `
        
        <label for="usr">Name:</label>
       
        <h3>Listado de Estudiantes</h3>
       
        <table class="table table-striped">
             <tr>
                 <td>Id</td>
                 <td>Nombre</td>
                 <td>Apellido</td>
             </tr>
             <tr *ngFor="let estudiante of listaEstudiantes; let i=index;">
                 <td (click)="seleccionarEstudiante(estudiante)">{{estudiante.id}}</td>
                 <td>{{estudiante.nombre}}</td>
                 <td>{{estudiante.apellido}}</td>
             </tr>
        </table>
        <materias [materiasEstudiante]="materias"></materias>`

})

export class HtmlComponent{
    

    listaEstudiantes: Array<Estudiante>;
    materias: Materia;
    estudiante:Estudiante;

    constructor(){    
        this.listaEstudiantes = [
                                    {id: 1, nombre: 'Jaime', apellido: 'Lopez', edad:35, materias: [{ id:1, nombre:'Calculo',semestre:10}]},
                                    {id: 2, nombre: 'Diana', apellido: 'Muñoz', edad:28, materias: [{ id:2, nombre:'Metematicas',semestre:5}]},
                                    {id: 3, nombre: 'Jhonnier', apellido: 'Sanchez', edad:33, materias: []}
                                    
                                ];
    }
    seleccionarEstudiante(estudiante)
    {
        this.materias = estudiante.materias;
    }


}