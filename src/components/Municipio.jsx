import React from 'react'
import {Informacion} from './Informacion';

export const Municipio = ({ 
    municipios,
    entornos,
    checkMunicipio,
    checkEntorno,
    nombre,
    localidad,
    tipo,
    email,
    descripcion, }) => {
    return (
        <section>
            <label htmlFor="municipio">Municipio</label>
            <select onChange={checkMunicipio} name="municipio" id="municipio">
                {municipios.length > 0 && municipios instanceof Array ? (
                    municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>
                            {municipio}
                        </option>
                    ))
                ) : (
                    <option>Aukeratu probintzia</option>
                )}
            </select>

            <label htmlFor="entorno">Entorno natural</label>
            <select onChange={checkEntorno} name="entorno" id="entorno">
                {entornos.length > 0 && entornos instanceof Array ? (
                    entornos.map((entorno) => (
                        <option key={entorno} value={entorno}>
                            {entorno}
                        </option>
                    ))
                ) : (
                    <option>Aukeratu probintzia</option>
                )}
            </select>
            <br></br>
            <Informacion
                nombre={nombre}
                localidad={localidad}
                tipo={tipo}
                email={email}
                descripcion={descripcion}
            />
        </section>
    );
}