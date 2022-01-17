import React from 'react';
import TableHead from '@mui/material';

function TableHeaders() {
    return (
        <>
            <tr>
                <th rowSpan="2">Fecha</th>
                <th rowSpan="2">Hora</th>
                <th colSpan="2">Desayuno</th>
                <th colSpan="2">Almuerzo</th>
                <th colSpan="2">Cena</th>
                <th rowSpan="2">Medicamento</th>
                <th rowSpan="2">Notas</th>
            </tr>
            <tr>
                <td>Antes</td>
                <td>Despues</td>
                <td>Antes</td>
                <td>Despues</td>
                <td>Antes</td>
                <td>Despues</td>
            </tr>
        </>

    )
}

export default TableHeaders
