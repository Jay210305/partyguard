// import React, { useState } from 'react';
// import axios from 'axios';

// const InviteForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/send-invite', { name, email });
//             setMessage(response.data);
//         } catch (error) {
//             setMessage('Error enviando la invitación');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Nombre:</label>
//                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <button type="submit">Enviar Invitación</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default InviteForm;

import React, { useState } from 'react';
import axios from 'axios';

const InviteForm = ({ eventId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/events/${eventId}/invite`, { name, email });
            setMessage('Invitado agregado con éxito');
        } catch (error) {
            setMessage('Error enviando la invitación');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">Agregar Invitado</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default InviteForm;
