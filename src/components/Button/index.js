import styled from "styled-components";

export const Button = styled.button`
    ${
        props => `
            width: ${props.$width || 'auto'};
            height: ${props.$height || 'auto'};
            background: ${props.$bcg || 'transparent'};
            ${props.$radius ? `border-radius: ${props.$radius};`: ''}
            border: none;
            color: ${props.$color || props.theme.colors.black};
            font-size: ${props.$size || props.theme.fontSizes.medium};
            padding: ${props.$padding || 0};
            font-weight: ${props.$fontWeight || 400};
            cursor: pointer;
        `
    }
`