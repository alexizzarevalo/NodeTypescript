export interface User {
    tipo: string;
    nombre: string;
    apellido: string;
    clave: string;
    correo: string;
    genero: string;
    fechanac: Date;
    telefono: null | string;
    direccion: null | string;
    foto: string;
    cod_tipo: number;
}
