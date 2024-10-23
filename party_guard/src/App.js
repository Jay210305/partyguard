import React, { useState } from 'react';
import InvitadoForm from './components/InvitadoForm';
import ListaInvitados from './components/ListaInvitados';
import CodigoQR from './components/CodigoQR';
import EnviarCorreo from './components/EnviarCorreo';
import './App.css'

function App() {
  const [invitados, setInvitados] = useState([]);
  const [qrImage, setQrImage] = useState(''); // Guardar imagen QR

  const agregarInvitado = (invitado) => {
    setInvitados([...invitados, invitado]);
  };

  return (
    <div>
      <h1>PartyGuard</h1>
      <InvitadoForm agregarInvitado={agregarInvitado} />
      <ListaInvitados invitados={invitados} />
      {invitados.map((invitado, index) => (
        <div key={index}>
          <CodigoQR invitado={invitado} setQrImage={setQrImage} />
          <EnviarCorreo invitado={invitado} qrImage={qrImage} />
          <a href="qrImage" download={qr}></a>
        </div>
      ))}
    </div>
  );
}

export default App;
