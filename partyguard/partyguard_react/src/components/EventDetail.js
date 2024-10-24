import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InviteForm from './InviteForm';

const EventDetail = () => {
    const { eventId } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true); // Para mostrar un mensaje de carga mientras se obtienen los datos

    // Función para cargar los datos del evento
    const fetchEvent = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:5000/events/${eventId}`);
            setEvent(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error al cargar los detalles del evento:', error);
        }
    };

    // Cargamos los detalles del evento cuando se monta el componente
    useEffect(() => {
        fetchEvent();
    }, [eventId]);

    if (loading) {
        return <p>Cargando detalles del evento...</p>;
    }

    return (
        <div style={{ display: 'flex' }}>
            {/* Lista de invitados a la izquierda */}
            <div style={{ flex: 1, paddingRight: '20px' }}>
                <h2>Lista de Invitados</h2>

                {/* Botón de Refresh */}
                <button onClick={fetchEvent} style={{ marginBottom: '10px' }}>Refresh</button>

                {event.guests.length === 0 ? (
                    <p>No hay invitados aún.</p>
                ) : (
                    <ul>
                        {event.guests.map((guest, index) => (
                            <li key={index}>{guest.name} - {guest.email}</li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Formulario para agregar nuevos invitados a la derecha */}
            <div style={{ flex: 1 }}>
                <h2>Agregar Invitado</h2>
                <InviteForm eventId={eventId} />
            </div>
        </div>
    );
};

export default EventDetail;
