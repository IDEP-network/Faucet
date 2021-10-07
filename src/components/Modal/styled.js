import styled from "styled-components";
import { Flex } from "../Flex";

export const ModalWrapper = styled(Flex)`
    ${
        props => `
            width: 100%;
            height: 10vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: ${props.modal ? props.theme.zIndex.modal : `-${props.theme.zIndex.modal}`};
            opacity: ${props.modal ? 1 : 0};
            transition: all 0.3s ease;
            width: 100%;
            height: 100vh;
            background-color: rgba(237, 237, 237, 0.9);
            align-items: center;
            justify-content: space-around;
        `
    }
`