import {Component} from '@angular/core'
import {Estudiante, Materia} from './estudiantes'


@Component({
    selector: 'estudiantes',
    templateUrl:'./app/estudiantes.component.html'
    
})
export class EstudiantesComponent
{
    listaEstudiantes: Array<Estudiante>;
    materias: Materia;
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