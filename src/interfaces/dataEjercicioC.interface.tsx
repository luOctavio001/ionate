export interface DatosReporteTablaC {
    costo1: number;
    incremento1: number;
    costo2: number;
    incremento2: number;
    costo3: number;
    incremento3: number;
    costo4: number;
    incremento4: number;
    montoCorregido: number;
    factorCorregido: number;
    montoDevolucion: number;
    factorDevolucion: number;
    montoMaximo: number;
    factorMaximo: number;
    partidas: Partida[];
}

export interface Partida {
    nombre: string;
    costo1: number;
    incremento1: number;
    costo2: number;
    incremento2: number;
    costo3: number;
    incremento3: number;
    costo4: number;
    incremento4: number;
}

export interface Cliente {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    ruta: string;
    nombreProyecto: string;
}

export interface Pestania {
    id: string;
    descripcion: string;
    value: string;
}

export interface Columnas {
    id: string;
    des: string;
}

export interface DatosReporteAvances {
    avance: string;
    fecha: string;
    moneda: string;
}