import '../../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { columbasTablaA, columbasTablaB, pestaniaAB } from '../../commons/constants/ejercicioAB';
import { Columnas, DatosReporteAvances, Pestania } from '../../interfaces/dataEjercicioC.interface';
import { DatosGarantiaDeuda, DatosReporteIntereses, DatosReporteTablaA, DatosReporteTablaB } from '../../interfaces/dataEjercicioAB.interface';

function EjercicioAB() {
    return (
        <div className="containerC">
            <BodyTabAB />
        </div>
    );
}

class BodyTabAB extends React.Component {
    pestania: Pestania[];

    constructor(props: any) {
        super(props);
        this.state = { pestaniaActual: 'var' };
        this.pestania = pestaniaAB;
        this.changePestania = this.changePestania.bind(this);
    }
    changePestania = (e: any) => {
        this.setState({ pestaniaActual: e });
        this.pestania[0].value = e === 'resumen' ? ' menu-active' : 'menu';
        this.pestania[1].value = e === 'plazo' ? ' menu-active' : 'menu';
        this.pestania[2].value = e === 'unidades' ? ' menu-active' : 'menu';
        this.pestania[3].value = e === 'costos' ? ' menu-active' : 'menu';
        this.pestania[4].value = e === 'var' ? ' menu-active' : 'menu';
        this.pestania[5].value = e === 'comercializacion' ? ' menu-active' : 'menu';
        this.pestania[6].value = e === 'credito' ? ' menu-active' : 'menu';
        this.pestania[7].value = e === 'observaciones' ? ' menu-active' : 'menu';
    }
    render() {
        return (
            <NavTabContentAB changePestania={this.changePestania} pestania={this.pestania} pestaniaActual={this.state} />
        );
    }
}


function NavTabContentAB(props: any) {
    return (
        <div className="customGrupBorder2">
            <span className="header-modalAB">Antecedentes Generales</span>
            <div>
                <span onClick={() => props.changePestania('resumen')} className={props.pestania[0].value}>
                    {props.pestania[0].descripcion}
                </span>
                <span onClick={() => props.changePestania('plazo')} className={props.pestania[1].value} >
                    {props.pestania[1].descripcion}
                </span>
                <span onClick={() => props.changePestania('unidades')} className={props.pestania[2].value} >
                    {props.pestania[2].descripcion}
                </span>
                <span onClick={() => props.changePestania('costos')} className={props.pestania[3].value}>
                    {props.pestania[3].descripcion}
                </span>
                <span onClick={() => props.changePestania('var')} className={props.pestania[4].value}>
                    {props.pestania[4].descripcion}
                </span>
                <span onClick={() => props.changePestania('comercializacion')} className={props.pestania[5].value} >
                    {props.pestania[5].descripcion}
                </span>
                <span onClick={() => props.changePestania('credito')} className={props.pestania[6].value} >
                    {props.pestania[6].descripcion}
                </span>
                <span onClick={() => props.changePestania('observaciones')} className={props.pestania[7].value}>
                    {props.pestania[7].descripcion}
                </span>
            </div>
            <div className="customGrupBorder">
                <div>{
                    props.pestaniaActual.pestaniaActual === 'var' ? <TableDetalleA /> : props.pestaniaActual.pestaniaActual === 'comercializacion' ? <TableDetalleB /> : <div>Ventana: {props.pestaniaActual.pestaniaActual}</div>}
                </div>
            </div>
        </div>
    );
}

function TableDetalleA(props: any) {
    let columnas: Columnas[] = columbasTablaA;
    let dommy3: DatosReporteTablaA = {
        partidas: [
            {
                partida: 'TERRENO',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            },
            {
                partida: 'AV. OBRAS',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            },
            {
                partida: 'VALOR PROPY TERMINADO',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            },
            {
                partida: 'TOTAL GARANTIAS',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            }, {
                partida: 'BOLETIN TIA URBAN',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            }, {
                partida: 'ANTICIPO',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            }, {
                partida: 'CREDITO SEGÚN AV. DE OBRAS',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            }, {
                partida: 'CREDITO CON RECEP. MUN',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            }, {
                partida: 'TOTAL DEUDAS',
                inicio: 37637,
                antes: 37637,
                conRecep: 0,
            }],
        descripcion: 'MONTO CRÉDITO ANTES DE INICIO DE ABONOS',
        total: 56226.52
    }
    let avances: DatosReporteIntereses = { perConst: 12, interes: 10, pexPry: 6 }
    let garantia: DatosGarantiaDeuda = { monto1: 5, monto2: 1, monto3: 2 }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row ">
                <div><HeaderBodyTabA {...avances} /></div>
                <div className="scrollTab2">
                    <table className="ejercicioA">
                        <thead>
                            <tr className="header-table">
                                {columnas.map(column => <th rowSpan={1} colSpan={1} scope="col">{column.des}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dommy3.partidas.map((el: any) => <tr>
                                    {columnas.map(column => <td className={column.id + ' ' + el['partida']}>{el[column.id]}</td>)}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div><FooterBodyTabA {...garantia} /></div>
        </div>
    );
}

class HeaderBodyTabA extends React.Component {
    avance: { value: number; };
    fecha: { value: number; };
    moneda: { value: number; };
    constructor(props: DatosReporteIntereses) {
        super(props);
        this.avance = { value: props.interes };
        this.fecha = { value: props.perConst };
        this.moneda = { value: props.pexPry }
    }

    render() {
        return (
            <div className="d-flex justify-content-center flex-column customGrupBorder ">
                <div>
                    <div><label>Per. Const. (n) </label></div>
                    <div className="d-flex justify-content-end"><input type="text" value={this.avance.value} className="xshort" /></div>
                </div>
                <div>
                    <div><label>Interes (i) </label></div>
                    <div className="d-flex justify-content-end"><input type="text" value={this.fecha.value} className="xshort" /></div>
                </div>
                <div>
                    <div><label>Rex. Pry (Rec) </label></div>
                    <div className="d-flex justify-content-end"><input type="text" value={this.moneda.value} className="xshort" /></div>
                </div>
            </div>
        );
    }
}

class FooterBodyTabA extends React.Component {
    monto1: { value: number; };
    monto2: { value: number; };
    monto3: { value: number; };
    constructor(props: DatosGarantiaDeuda) {
        super(props);
        this.monto1 = { value: props.monto1 };
        this.monto2 = { value: props.monto2 };
        this.monto3 = { value: props.monto3 }
    }

    render() {
        return (
            <div className="d-flex justify-content-end m-3">
                <div>
                    <span className="pr-3" >
                        Relación Garantia Deuda %  </span>
                    <input type="text" value={this.monto1.value} className="short" />
                    <input type="text" value={this.monto2.value} className="short" />
                    <input type="text" value={this.monto3.value} className="short" />
                </div>
            </div>
        );
    }
}


function TableDetalleB(props: any) {
    let columnas: Columnas[] = columbasTablaB;
    let dommy3: DatosReporteTablaB = {
        partidas: [
            {
                partida: 'UNIDADES COMPROMETIDAS',
                costo: 8,
                destino: 'FLUJO AJUSTADO',
                monto: 6418,
            },
            {
                partida: 'UNIDADES POR COMERCIALIZAR',
                costo: 34,
                destino: 'FLUJO AJUSTADO',
                monto: 96418,
            }],
        descripcion: 'MONTO CRÉDITO ANTES DE INICIO DE ABONOS',
        total: 56226.52
    }
    let avances: DatosReporteAvances = { avance: '12,00', fecha: '10,00', moneda: '6,00' }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row ">

                <div className="scrollTab2">
                    <table className="ejercicioB">
                        <thead>
                            <tr className="header-table">
                                {columnas.map(column => <th rowSpan={1} colSpan={1} scope="col">{column.des}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dommy3.partidas.map((el:any) => <tr>
                                    {columnas.map(column => <td className={column.id}>{el[column.id]}</td>)}
                                </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3}>{dommy3.descripcion}</td>
                                <td>{dommy3.total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div><FooterBodyTabB {...avances} /></div>
        </div>

    );
}

class FooterBodyTabB extends React.Component {
    avance: { value: string; };
    fecha: { value: string; };
    moneda: { value: string; };
    constructor(props:DatosReporteAvances) {
        super(props);
        this.avance = { value: props.avance };
        this.fecha = { value: props.fecha };
        this.moneda = { value: props.moneda }
    }

    render() {
        return (
            <div className="d-flex  flex-column m-2 pt-2">
                <div className="d-flex flex-row justify-content-end">
                    <div><label>Deuda "(Cred. Propuesto + Carga Finaciera)" </label></div>
                    <div ><input type="text" value={this.avance.value} className="xshort" /></div>
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <div><label>Flujos Ajustados </label></div>
                    <div><input type="text" value={this.fecha.value} className="xshort" /></div>
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <div><label>Relación flujo ajustado deuda </label></div>
                    <div ><input type="text" value={this.moneda.value} className="xshort" /></div>
                </div>
            </div>
        );
    }
}

export default EjercicioAB;