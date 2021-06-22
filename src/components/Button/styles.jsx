import styled from 'styled-components'

export const ButtonWrapper = styled.div`
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: lighter;
    font-size: 1.4em;    
    flex: 1;
    outline: 1px solid #888;    
    background-color: #e0e1e6;
    color: #888;    
    cursor: pointer;
`

export const ButtonWrapperOperator = styled(ButtonWrapper)`
    background-color: #fe9241;
    color: #FFF;    
`