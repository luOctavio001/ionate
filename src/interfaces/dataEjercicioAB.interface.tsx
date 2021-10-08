export interface DatosReporteTablaA {
    descripcion: string;
    total: number;
    partidas: PartidaA[];
}

export interface PartidaA {
    partida: string;
    inicio: number;
    antes: number;
    conRecep: number;
}

export interface DatosReporteIntereses {
    perConst: number;
    interes: number;
    pexPry: number;
}

export interface DatosGarantiaDeuda {
    monto1: number;
    monto2: number;
    monto3: number;
}

export interface DatosReporteTablaB {
    descripcion: string;
    total: number;
    partidas: PartidaB[];
}

export interface PartidaB {
    partida: string;
    costo: number;
    destino: string;
    monto: number;
}