'use client'

import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import ComponentThemeContext from '../context/ComponentThemeContext';

const StyledButton = styled(motion.button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.secondaryHex};
    background-color: ${({ theme }) => theme.primaryHex};
    `;

const Button = (props: any) => {
    const {state} = useContext(ComponentThemeContext);

    return (
        <StyledButton className={props.className} onClick={props.onClick} theme={state}>
            {props.children}
        </StyledButton>
    );
}

export default Button;