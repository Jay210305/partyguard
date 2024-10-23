import CryptoJS from 'crypto-js';

export const generarQRDataEncriptada = (invitado) => {
  const data = JSON.stringify(invitado);
  const encriptado = CryptoJS.AES.encrypt(data, 'clave-secreta').toString();
  return encriptado;
};