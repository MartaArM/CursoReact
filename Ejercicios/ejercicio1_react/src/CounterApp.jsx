import PropTypes from 'prop-types';

export default function CounterApp( { value } ) { 
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
        </>)
} 

CounterApp.propTypes = {
    value: PropTypes.number.isRequired 
}

CounterApp.defaultProps = { 
    value: 0
}