// src/App.js
import React, { useState } from 'react';
import InvitadoForm from './components/InvitadoForm';
import ListaInvitados from './components/ListaInvitados';
import CodigoQR from './components/CodigoQR';
import EnviarCorreo from './components/EnviarCorreo';

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
          <CodigoQR invitado={invitado} setQrImage={setQrImage} /> {/* Pasar setQrImage */}
          <EnviarCorreo invitado={invitado} qrImage={qrImage} /> {/* Pasar qrImage */}
        </div>
      ))}
    </div>
  );
}

export default App;

