import React from 'react'

export const Provincia = ({ provincia, checkProvincia }) => {
    return (
        <section>
            <p>Provincia</p>
            
                <input type="radio" id="araba" name="provincia" value="Araba/Álava" checked={provincia === 'Araba/Álava'} onChange={checkProvincia} />
                <label htmlFor="araba">Araba/Álava</label>

                <br></br>

                <input type="radio" id="bizkaia" name="provincia" value="Bizkaia" checked={provincia === 'Bizkaia'} onChange={checkProvincia} />
                <label htmlFor="bizkaia">Bizkaia</label>

                <br></br>

                <input type="radio" id="gipuzkoa" name="provincia" value="Gipuzkoa" checked={provincia === 'Gipuzkoa'} onChange={checkProvincia}/>
                <label htmlFor="gipuzkoa">Gipuzkoa</label>

                <br></br>
            
        </section>
    );
}