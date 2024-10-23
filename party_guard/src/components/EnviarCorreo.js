import React from 'react';
import emailjs from 'emailjs-com';

const EnviarCorreo = ({ invitado, qrImage }) => {
  const enviarCorreo = () => {
    const templateParams = {
      to_name: invitado.nombre,
      to_email: invitado.email,
      message: 'Aquí tienes tu código QR adjunto:',

      // Aquí defines el archivo adjunto
      attachments: [
        {
          content: qrImage.split(',')[1], // Elimina la parte "data:image/png;base64,"
          filename: 'qr-code.png', // Nombre del archivo adjunto
          type: 'image/png', // Tipo de archivo
          disposition: 'attachment', // Adjuntar como archivo
        },
      ],
    };

    emailjs.send('service_partyguard', 'template_pin45c6', templateParams, 'oqxRUEzEfailfOjE7')
      .then((response) => {
        console.log('Correo enviado', response.status, response.text);
      })
      .catch((err) => console.log('Error al enviar el correo', err));
  };

  return <button onClick={enviarCorreo}>Enviar QR a {invitado.nombre}</button>;
};

export default EnviarCorreo;
