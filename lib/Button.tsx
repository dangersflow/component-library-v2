'use client'

import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    `;

const Button = (props: any) => {
    return (
        <StyledButton className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}

export default Button;