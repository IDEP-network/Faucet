import styled from "styled-components";

export const Image = styled.img`
    ${
        props => `
            height: ${props.$height || '100%'};
            width: ${props.$width || 'auto'}
        `
    }
`