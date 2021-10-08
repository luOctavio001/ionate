import '../../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cliente, Columnas, DatosReporteAvances, DatosReporteTablaC, Pestania } from '../../interfaces/dataEjercicioC.interface';
import { columbasTablaC, pestaniaC } from '../../commons/constants/ejercicioC';


function EjercicioC() {
  let cliente: Cliente = {
    nombre: 'Nombres',
    apellidoPaterno: 'PATERNO',
    apellidoMaterno: 'MATERNO',
    ruta: '85.237.600-7',
    nombreProyecto: 'CONJUNTO SOL DEL VALLE'
  };

  return (
    <div className="containerC">
      <HeaderTab {...cliente} />
      <BodyTab />
    </div>
  );
}

class HeaderTab extends React.Component {
  name: { value: string; };
  ruta: { value: string; };
  nomProyecto: { value: string; };

  constructor(props: Cliente) {
    super(props);
    this.name = { value: props.apellidoPaterno + ' ' + props.apellidoMaterno + ' ' + props.nombre };
    this.ruta = { value: props.ruta };
    this.nomProyecto = { value: props.nombreProyecto }
  }
  

  render() {
    return (
      <div className="d-flex justify-content-between customGrupBorder ">
        <div>
          <label>
            Cliente:
            <input type="text" value={this.name.value} className="long" />
          </label>
        </div>
        <div><label>
          Rut:
          <input type="text" value={this.ruta.value} className="short" />
        </label>
        </div>
        <div><label>
          N. Proyecto:
          <input type="text" value={this.nomProyecto.value} className="long" />
        </label>
        </div>
      </div>
    );
  }
}


class BodyTab extends React.Component {
  columnas: Columnas[];
  pestania: Pestania[];
  constructor(props: any) {
    super(props);
    this.state = { pestaniaActual: 'estado' };
    this.columnas = columbasTablaC;
    this.pestania = pestaniaC;
    this.changePestania = this.changePestania.bind(this);
  }
  changePestania = (e: any) => {
    this.setState({ pestaniaActual: e });
    this.pestania[0].value = e === 'estado' ? ' menu-active' : 'menu';
    this.pestania[1].value = e === 'correccion' ? ' menu-active' : 'menu';
    this.pestania[2].value = e === 'antecedentes' ? ' menu-active' : 'menu';
    this.pestania[3].value = e === 'configuracion' ? ' menu-active' : 'menu';
  }
  render() {
    return (
      <NavTabContent columnas={this.columnas} changePestania={this.changePestania} pestania={this.pestania} pestaniaActual={this.state} />
    );
  }
}


function NavTabContent(props:any) {
  let avances: DatosReporteAvances = { avance: '1', fecha: '18/09/2021', moneda: 'U.F.' };
  return (
    <div className="customGrupBorder">
      <div>
        <span onClick={() => props.changePestania('estado')} className={props.pestania[0].value}>
          {props.pestania[0].descripcion}
        </span>
        <span onClick={() => props.changePestania('correccion')} className={props.pestania[1].value} >
          {props.pestania[1].descripcion}
        </span>
        <span onClick={() => props.changePestania('antecedentes')} className={props.pestania[2].value} >
          {props.pestania[2].descripcion}
        </span>
        <span onClick={() => props.changePestania('configuracion')} className={props.pestania[3].value}>
          {props.pestania[3].descripcion}
        </span>
      </div>
      <div className="customGrupBorder">
        <div><HeaderBodyTab {...avances} /></div>
        <div>{props.pestaniaActual.pestaniaActual === 'estado' ? <TableDetalle columnas={props.columnas} /> : <div>Ventana: {props.pestaniaActual.pestaniaActual}</div>}
        </div>
      </div>
    </div>
  );
}

class HeaderBodyTab extends React.Component {
  avance: { value: any; };
  fecha: { value: any; };
  moneda: { value: any; };
  constructor(props:DatosReporteAvances) {
    super(props);
    this.avance = { value: props.avance };
    this.fecha = { value: props.fecha };
    this.moneda = { value: props.moneda }
  }

  render() {
    return (
      <div className="d-flex justify-content-between customGrupBorder ">
        <div>
          <label>
            N° Avance:
            <input type="text" value={this.avance.value} className="short" />
          </label>
        </div>
        <div><label>
          Fecha de Inspección:
          <input type="text" value={this.fecha.value} className="short" />
        </label>
        </div>
        <div><label>
          Moneda:
          <input type="text" value={this.moneda.value} className="long" />
        </label>
        </div>
      </div>
    );
  }
}


function TableDetalle(props:any) {
  let dommy3: DatosReporteTablaC = {
    partidas: [
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: 949,
        incremento1: 1.71,
        costo2: 618,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: 949.00,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'IVA',
        costo1: 39,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: 949.00,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'IVA',
        costo1: 39,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: 949.00,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'IVA',
        costo1: 39,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'INSTAL FAENAS Y OBRAS',
        costo1: 949.00,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'OTROS',
        costo1: 949.00,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'IVA',
        costo1: 39,
        incremento1: 1.71,
        costo2: 618.00,
        incremento2: 69.99,
        costo3: 618.00,
        incremento3: 69.99,
        costo4: 618.00,
        incremento4: 69.99
      },
      {
        nombre: 'TOTAL',
        costo1: 39,
        incremento1: 0,
        costo2: 618.00,
        incremento2: 6.10,
        costo3: 618.00,
        incremento3: 0,
        costo4: 618.00,
        incremento4: 6.10
      }],
    costo1: 554510,
    incremento1: 0,
    costo2: 3327,
    incremento2: 6.10,
    costo3: 0,
    incremento3: 0,
    costo4: 3327,
    incremento4: 0,
    montoCorregido: 3327,
    factorCorregido: 100,
    montoDevolucion: 450,
    factorDevolucion: 13.52,
    montoMaximo: 2357,
    factorMaximo: 0
  }
  return (
    <div className="scrollTab">
      <table>
        <thead>
          <tr className="header-table">
            <th rowSpan={2} colSpan={1} scope="col">Partidas/Montos</th>
            <th rowSpan={1} colSpan={2} scope="col">
              Costo Total del Proyecto
            </th>
            <th rowSpan={1} colSpan={2} scope="col">
              Total Avance a la Fecha
            </th>
            <th rowSpan={1} colSpan={2} scope="col">
              Total Avance Anterior
            </th>
            <th rowSpan={1} colSpan={2} scope="col">
              Total Avance del Periodo
            </th>
          </tr>
          <tr className="header-table">
            {
              props.columnas.map((column: Columnas) =>
                column.des !== 'Partidas/Montos' ?
                  <th rowSpan={1} colSpan={1} scope="col">{column.des}</th> : '')
            }
          </tr>
        </thead>
        <tbody>
          {
            dommy3.partidas.map((el:any) => <tr>
              {
                props.columnas.map((column: Columnas) =>
                  <td className={column.id}>{el[column.id]}</td>)
              }
            </tr>)
          }
        </tbody>
        <tfoot>
          <tr>
            <td>TOTAL OBRA</td>
            <td>{dommy3.costo1}</td>
            <td>{dommy3.incremento1}</td>
            <td>{dommy3.costo2}</td>
            <td>{dommy3.incremento2}</td>
            <td>{dommy3.costo3}</td>
            <td>{dommy3.incremento3}</td>
            <td>{dommy3.costo4}</td>
            <td>{dommy3.incremento4}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>MONTO</td>
            <td>FACTOR</td>
          </tr>
          <tr>
            <td colSpan={7}>MONTO CORREGIDO</td>
            <td>{dommy3.montoCorregido}</td>
            <td>{dommy3.factorCorregido}</td>
          </tr>
          <tr>
            <td colSpan={7}>DEVOLUCIÓN MÓINIMO ANTICIPO</td>
            <td>{dommy3.montoDevolucion}</td>
            <td>{dommy3.factorDevolucion}</td>
          </tr>
          <tr>
            <td colSpan={7}>MONTO MÁXIMO AUTORIZADO A CIUDAD</td>
            <td>{dommy3.montoMaximo}</td>
            <td>{dommy3.factorMaximo}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}


export default EjercicioC;