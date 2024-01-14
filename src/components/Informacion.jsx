export const Informacion = ({ nombre, localidad, tipo, email, descripcion }) => {
    return (
        <section id="informacion">
            <h1>Información del local seleccionado</h1>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" value={nombre} />

            <label htmlFor="localidad">Localidad:</label>
            <input type="text" name="localidad" value={localidad} />

            <h1>Información adicional</h1>
            <label htmlFor="tipo">Tipo:</label>
            <input type="text" name="tipo" value={tipo} />
            <br /><br />

            <label htmlFor="email">Turismo euskadi:</label>
            <input type="text" name="email" value={email} />

            <br /><br />

            <label htmlFor="descripcion">Descripción:</label>
            <textarea name="descripcion" rows={5} cols={25} value={descripcion}></textarea>
        </section>
    );
}