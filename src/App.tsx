import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import EjercicioC from './components/ejercicoC/ejercicoC'
import EjercicioAB from './components/ejercicoAB/ejercicioAB'
import imgGuardar from './assets/images/guardar.png'
import imgImprimir from './assets/images/imprimir.jpg'
import imgSalir from './assets/images/salir.png'



function App(): JSX.Element {
  const [showAB, setShowAB] = useState(false);
  const [showC, setShowC] = useState(false);
  const imprimir:any = () => imprimir();

  return (
    <div className="App">
      <div className="App-header">
        Luis Octavio Romo Gongora<br />
        Ejercicios Ionate:<br />

        <div className="d-flex justify-content-around containerBotton mt-5">
          <Button variant="primary" onClick={() => setShowAB(true)}>
            Ejercicio A y B
          </Button>
          <Button variant="primary" onClick={() => setShowC(true)}>
            Ejercicio C
          </Button>
        </div>
      </div>
      <>


        <Modal
          size="lg"
          show={showAB}
          onHide={() => setShowAB(false)}
          aria-labelledby="modal-sizes-title-lg"
        >
          <Modal.Body><EjercicioAB /></Modal.Body>
        </Modal>

        <Modal
          size="lg"
          show={showC}
          onHide={() => setShowC(false)}
          aria-labelledby="modal-sizes-title-lg"
        >
          <Modal.Header closeButton={false}>
            <Modal.Title id="modal-sizes-title-lg">Detalle del estado de avance</Modal.Title>
          </Modal.Header >
          <Modal.Body><EjercicioC /></Modal.Body>
          <Modal.Footer>
            <Button className="iconsButton" onClick={imprimir} title="Guardar">
              <img src={imgGuardar} className="iconsImg" alt="" />
            </Button>
            <Button className="iconsButton" onClick={imprimir} title="Imprimir">
              <img src={imgImprimir} className="iconsImg" alt="" />
            </Button>
            <Button className="iconsButton" onClick={() => setShowC(false)} title="Salir">
              <img src={imgSalir} className="iconsImg" alt="" />
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default App;
