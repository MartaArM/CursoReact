import PropTypes from 'prop-types';

export default function FirstApp( { name } ) { // Es mejor desestructurarlo
    return(
        <>
            <h1>Bienvenido</h1>
            <h2>{ name }</h2>
        </>)
} 

// Decir de qué tipo de datos son las propiedades
FirstApp.propTypes = {
    name: PropTypes.string.isRequired // Para hacer la propiedad obligatoria
}

FirstApp.defaultProps = { // Propiedades por defecto
    name: 'No hay nombre'
}