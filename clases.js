class Usuario {
    constructor (nombre, apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return ` Hola mi nombre es ${this.nombre} ${this.apellido} `
    }

    addPet(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countPets() {
        return this.mascotas.length
    }

    addBook (titulo, nombreAutor) {
        this.libros.push({nombre: titulo, autor: nombreAutor})
        }

    getBooksNames () {
        return this.libros.map( (libro) => libro.nombre) 
    }
}

const libros = [
    {
        nombre:'Mi planta de naranja lima',
        autor:'José Mauro de Vasconcelos'
    },
    {
        nombre:'Maze Runner',
        autor:'James Dashner'
    }
]

const usuario1 = new Usuario('Valentin', 'Garcia', libros, ['perro', 'gato']);

console.log(usuario1.getFullName());
console.log(usuario1.getBooksNames());
usuario1.addBook('El Principito', 'Antoine de Saint-Exupéry');
console.log(usuario1.getBooksNames());
console.log(usuario1.countPets());
usuario1.addPet('Hamster');
console.log(usuario1.countPets());


