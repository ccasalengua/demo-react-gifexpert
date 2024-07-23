import { useState } from 'react';
import PropTypes from "prop-types";
import './styles.css';
export const FirstApp = ( {name = 'Carlos', number = 8} ) => {

    const [ counter, setCounter ] = useState(number);

    const handleAdd = () => {
        setCounter( (c) => c + 1);
    }

    const handleMinus = () => {
        setCounter( (c) => c - 1);
    }

    const handleRemove = () => {
        setCounter( number );
    }

    return (
        <>
            <h2>{name}</h2>
            <p>{number} + 1 = {number + 1}</p>
            <p>{ counter }</p>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleMinus}> -1 </button>
            <button onClick={handleRemove}> Reset </button>
        </>
    )
}

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}