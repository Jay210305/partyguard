import React from 'react';

const ListaInvitados = ({ invitados }) => {
  return (
    <div>
      <h2>Lista de Invitados</h2>
      <ul>
        {invitados.map((invitado, index) => (
          <li key={index}>
            {invitado.nombre} - {invitado.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaInvitados;