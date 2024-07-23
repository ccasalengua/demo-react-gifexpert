import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('pruebaCategory'); 

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <=1) return;
        
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                id='test' 
                type="text" 
                placeholder="add Keys" 
                value={ inputValue } 
                onChange={onInputChange} 
            />
        </form>
    )
}