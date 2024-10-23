// src/components/CodigoQR.js
import React, { useRef, useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import CryptoJS from 'crypto-js';

const CodigoQR = ({ invitado, setQrImage }) => {
  const qrRef = useRef(null);
  const [qrCode, setQrCode] = useState('');

  const generarQR = () => {
    const data = JSON.stringify(invitado);
    const encriptado = CryptoJS.AES.encrypt(data, 'clave-secreta').toString();
    return encriptado;
  };

  useEffect(() => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const base64Image = canvas.toDataURL('image/png'); // Convertir a base64
      setQrImage(base64Image); // Enviar la imagen al componente padre
      setQrCode(generarQR());
    }
  }, [invitado]);

  return (
    <div>
      <h3>Código QR para {invitado.nombre}</h3>
      <QRCodeCanvas value={qrCode} ref={qrRef} /> {/* Referencia al QR */}
    </div>
  );
};

export default CodigoQR;
