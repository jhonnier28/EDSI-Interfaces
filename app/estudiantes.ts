export class Materia
{
    id: number;
    nombre: string;
    semestre: number;
    constructor(id: number, nombre: string, semestre: number)
    {
        this.id = id;
        this.nombre = nombre;
        this.semestre = semestre;        
    }
}

export class Estudiante
{
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    materias: Array<Materia>
    constructor(id: number, nombre: string, apellidos: string, edad: number, materias: Array<Materia>){
        this.id = id;
        this.nombre= nombre;
        this.apellido = nombre;
        this.edad = edad;       
        this.materias = materias;
    }
}
