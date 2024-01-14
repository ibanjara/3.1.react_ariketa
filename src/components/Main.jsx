import React, { useState, useEffect } from 'react';
import { Provincia } from './Provincia';
import { Municipio } from './Municipio';

// Aplikazioa hasteko
// npm install
// npm start

export const Main = () => {
    const [provincia, setProvincia] = useState('');
    const [municipios, setMunicipios] = useState([]);
    const [entornos, setEntornos] = useState([]);
    const [selectedMunicipio, setSelectedMunicipio] = useState('');
    const [selectedEntorno, setSelectedEntorno] = useState('');

    const [localInfo, setLocalInfo] = useState({
        nombre: 'Izenik gabe',
        localidad: 'Tokirik gabe',
        tipo: 'Motarik gabe',
        email: 'Turismo emailrik gabe ',
        descripcion: 'Deskripziorik gabe',
    });

    const fetchData = async () => {
        try {
            const response = await fetch(`/espacios-naturales.json`);
            if (!response.ok) {
                throw new Error('Zerbait gaizki joan da.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Errorea datuak lortzerako orduan: ', error);
        }
    };

    const fetchInfo = async (municipio, entorno) => {
        const data = await fetchData();
        const localData = {
            nombre: 'Izenik gabe',
            localidad: 'Tokirik gabe',
            tipo: 'Motarik gabe',
            email: 'Turismo emailrik gabe ',
            descripcion: 'Deskripziorik gabe',
        };

        data.item.forEach((item) => {
            if (item['municipality'] === municipio && item['natureType'] === entorno) {
                localData['nombre'] = item['documentName'] || localData['nombre'];
                localData['localidad'] = item['locality'] || localData['localidad'];
                localData['tipo'] = item['templateType'] || localData['tipo'];
                localData['email'] = item['tourismEmail'] || localData['email'];
                localData['descripcion'] = item['turismDescription'] || localData['descripcion'];
            }
        });

        setLocalInfo(localData);
    };

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            if (provincia) {
                const data = await fetchData();
                if (data) {
                    const municipiosArray = [...new Set(data.item
                        .filter((item) => item['territory'] === provincia)
                        .map((item) => item['municipality'])
                    )];

                    const entornosArray = [...new Set(data.item
                        .filter((item) => item['territory'] === provincia)
                        .map((item) => item['natureType'])
                    )];

                    setMunicipios(municipiosArray);
                    setEntornos(entornosArray);
                    fetchInfo(municipiosArray[0], entornosArray[0]);
                }
            }
        };

        fetchDataAndSetState();
    }, [provincia]);

    const checkMunicipio = (event) => {
        const newMunicipio = event.target.value;
        setSelectedMunicipio(newMunicipio);
        fetchInfo(newMunicipio, selectedEntorno);
    };

    const checkEntorno = (event) => {
        const newEntorno = event.target.value;
        setSelectedEntorno(newEntorno);
        fetchInfo(selectedMunicipio, newEntorno);
    };

    const checkProvincia = (event) => {
        setProvincia(event.target.value);
    };

    return (
        <main>
            <Provincia provincia={provincia} checkProvincia={checkProvincia} />
            <br></br>
            <Municipio
                municipios={municipios}
                entornos={entornos}
                checkMunicipio={checkMunicipio}
                checkEntorno={checkEntorno}
                {...localInfo}
            />
        </main>
    );
};
