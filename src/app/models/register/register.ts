export class Register {
    nombre: string
    apellido: string
    usuario: string
    correo: string
    numero: number
    contrasenia: string
    fecha: Date
    constructor(_nombre: string, _apellido: string, _usuario: string, _correo: string, _numero: number, _contrasenia: string, _fecha: Date) {
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.usuario = _usuario;
        this.correo = _correo;
        this.numero = _numero;
        this.contrasenia = _contrasenia;
        this.fecha = _fecha;

    }

}
