import styled from "styled-components";

export const Input = styled.input`
    ${
        props => `
            margin-top: 1em;
            width: 100%;
            border: none;
            height: 50px;
            border-radius: 10px;
            padding: 0 1em;
            outline: none;
            background-color: ${props.$bcg || 'transparent'};
            color: ${props.$color || '#fff'};
            font-size: ${props.theme.fontSizes.medium};
            ::placeholder, ::-webkit-input-placeholder {
                color: ${props.$color || '#fff'};
            }
        `
    }
`