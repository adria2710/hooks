function Personaje({ titulo, nombre, imagen }) {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <h2>{titulo}</h2>
            <p>{nombre}</p>
            <img src={imagen} alt={nombre} />
        </div>
    );
}

export default Personaje;
