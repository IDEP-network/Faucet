import styled from "styled-components";

export const Flex = styled.div`
    ${
        props => 
        `
            display: flex;
            flex-direction: ${props.$direction || 'row' };
            align-items: ${props.$alignItems || 'flex-start'};
            justify-content: ${props.$justify || 'flex-start'};
            background: ${props.$bcg || 'transparent'};
            ${
                props.$flex ? `flex: ${props.$flex};` : ''
            }
            width: ${props.$width || '100%'};
            height: ${props.$height || '100%'};
            margin: ${props.$margin || '0 auto'};
            padding: ${props.$padding || "0"};
            border-radius: ${props.$radius || 0};
        `
    }
`