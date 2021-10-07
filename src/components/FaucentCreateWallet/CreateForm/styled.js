import styled from "styled-components";

export const FromLabel = styled.label`
    ${
        props => `
            color: ${props.$color || '#fff'};
            font-weight: 500;
        `
    }
`