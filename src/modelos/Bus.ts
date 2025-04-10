export interface Bus {
    id: number,
    numeroBus: string,
    placa: string,
    fechaCreacion: string,
    caracteristicas: string,
    marca: {
        id: number,
        nombre: string,
        descripcion: string
    },
    activo: boolean
}