import {Component} from '@angular/core'
import {Estudiante, Materia} from './estudiantes'
import {EstudianteService} from './estudiantes.service'


@Component({
    selector: 'estudiantes',
    templateUrl:'./app/estudiantes.component.html',
    providers:[EstudianteService]
    
})
export class EstudiantesComponent
{
    listaEstudiantes: Array<Estudiante>;
    materias: Materia;
 
    constructor(estudianteService: EstudianteService){    
        this.listaEstudiantes = estudianteService.obtenerListaEstudiantes();
    }
    seleccionarEstudiante(estudiante)
    {
        this.materias = estudiante.materias;
    }
}