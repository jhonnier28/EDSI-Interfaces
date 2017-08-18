class Persona{
        nombre: string;
        apellido: string;
        edad: number;

        constructor(edad:number, nombre: string, apellido?: string){
            this.nombre = nombre;
            this.apellido = apellido;

            console.log("Se ha creado una persona");

        }


        saludar(){
        console.log(`El nombre de la persona es: ${this.nombre}, Apellido: ${this.apellido}`);

        }

}


class Trabajador extends Persona {
        identificacion: number;

        mostrarIdentificacion(){
                console.log(`La identificacion de: ${this.nombre} ${this.apellido} es: ${this.identificacion}`);
        }

        constructor (edad:number, nombre: string, apellido?: string, identificacion?: number){
               super(edad,nombre,apellido); 
               this.identificacion = identificacion


        }
}

var persona: Persona = new Persona(35,'Jhonnier','Sanchez');
var trabajador: Trabajador = new Trabajador(40,'Pepito','Perez',15812);
persona.saludar();
trabajador.mostrarIdentificacion();