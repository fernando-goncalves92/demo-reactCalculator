import React from 'react'
import { InputWrapper } from './styles';

const Input = (props) => {
    return (
        <InputWrapper>
            {props.input}
        </InputWrapper>
    )
}

export default Input;