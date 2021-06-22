import React from 'react'
import { ButtonWrapper, ButtonWrapperOperator } from './styles';

const Button = (props) => {   
    const isNumberOrSign = (value) => {
        return !isNaN(value) || value === "." || value === "=";
    }

    return (
        <>
            {
                isNumberOrSign(props.children) ?                
                <ButtonWrapper 
                    onClick={() => props.handleClick(props.children)}
                >
                    {props.children}
                </ButtonWrapper> :
                <ButtonWrapperOperator 
                    onClick={() => props.handleClick(props.children)}
                >
                    {props.children}
                </ButtonWrapperOperator> 
            }
        </>
    )
}

export default Button;