const express = require('express');
const nodemailer = require('nodemailer');
const QRCode = require('qrcode');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Clave y vector de inicialización para el cifrado
const encryptionKey = crypto.randomBytes(32); // 256 bits
const iv = crypto.randomBytes(16); // 128 bits

// Función para encriptar la información
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`; // Incluye el IV en el resultado
}

// Ruta para procesar y enviar el correo
app.post('/send-invite', async (req, res) => {
    const { name, email } = req.body;
    const encryptedData = encrypt(`${name}|${email}`);

    // Nombre del archivo PNG temporal
    const qrCodeFilePath = path.join(__dirname, 'qrcode.png');

    // Generar el QR y guardarlo como PNG
    await QRCode.toFile(qrCodeFilePath, encryptedData);

    // Configuración de nodemailer
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'partyguardmail@gmail.com',
            pass: 'kqmt mair ymqw gbav'
        }
    });

    const mailOptions = {
        from: 'partyguardmail@gmail.com',
        to: email,
        subject: 'Tu invitación',
        html: `<p>Hola ${name}, aquí está tu código QR para el evento:</p>`,
        attachments: [
            {
                filename: 'qrcode.png',
                path: qrCodeFilePath,
                cid: 'qrcode' // cid es usado para referenciar el archivo en el html
            }
        ]
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        // Eliminar el archivo PNG después de enviarlo
        fs.unlink(qrCodeFilePath, (err) => {
            if (err) {
                console.error('Error eliminando el archivo QR:', err);
            }
        });

        if (error) {
            return res.status(500).send('Error enviando correo');
        }
        res.status(200).send('Correo enviado');
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));
