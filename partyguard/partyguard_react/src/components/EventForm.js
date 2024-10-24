import React, { useState } from 'react';
import axios from 'axios';

const EventForm = ({ onEventCreated }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/events', { name });
        onEventCreated(response.data);
        setName('');
    };

    return (
        <div>
            <h2>Crear Evento</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre del Evento:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <button type="submit">Crear Evento</button>
            </form>
        </div>
    );
};

export default EventForm;
