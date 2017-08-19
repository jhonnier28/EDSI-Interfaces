import {Estudiante} from './estudiantes'

export class EstudianteService{
private listaEstudiantes: Array<Estudiante>;
obtenerListaEstudiantes():Array<Estudiante>{

    this.listaEstudiantes = [
        {id: 1, nombre: 'Jaime', apellido: 'Lopez', edad:35, materias: [{ id:1, nombre:'Calculo',semestre:10}]},
        {id: 2, nombre: 'Diana', apellido: 'Muñoz', edad:28, materias: [{ id:2, nombre:'Metematicas',semestre:5}]},
        {id: 3, nombre: 'Jhonnier', apellido: 'Sanchez', edad:33, materias: []}
    ];
   return this.listaEstudiantes;
     }

}