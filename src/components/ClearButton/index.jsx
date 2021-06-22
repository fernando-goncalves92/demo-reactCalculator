import React from 'react'
import { ClearButtonWrapper } from './styles';

const ClearButton = (props) => {
    return (
        <ClearButtonWrapper onClick={props.handleClear}>
            {props.children}
        </ClearButtonWrapper>
    )
}

export default ClearButton;