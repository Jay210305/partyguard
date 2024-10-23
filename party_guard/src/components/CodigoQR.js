import React, { useRef, useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { generarQRDataEncriptada } from './utils'; // Importa la función externa

const CodigoQR = ({ invitado, setQrImage }) => {
  const qrRef = useRef(null);
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    const canvas = qrRef.current.querySelector('canvas');
    if (canvas) {
      const base64Image = canvas.toDataURL('image/png');
      setQrImage(base64Image);

      const qrDataEncriptada = generarQRDataEncriptada(invitado);
      setQrCode(qrDataEncriptada);
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