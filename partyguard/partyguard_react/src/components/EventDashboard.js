import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EventForm from './EventForm';

const EventDashboard = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await axios.get('http://localhost:5000/events');
            setEvents(response.data);
        };
        fetchEvents();
    }, []);

    const handleEventCreated = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <div>
            <h1>Gestión de Eventos</h1>

            {/* Mostrar eventos creados */}
            {events.length === 0 ? (
                <p>No hay eventos creados aún.</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <Link to={`/event/${event.id}`}>{event.name}</Link>
                        </li>
                    ))}
                </ul>
            )}

            {/* Formulario para crear un nuevo evento */}
            <EventForm onEventCreated={handleEventCreated} />
        </div>
    );
};

export default EventDashboard;
