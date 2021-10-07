import styled from "styled-components";
import { Flex } from "../Flex";

export const HeaderWrapper = styled(Flex)`
    ${
        props => `
            width: 100%;
            height: 10vh;
            position: absolute;
            top: 0;
            left: 0;
            z-index: ${props.theme.zIndex.appBar}
        `
    }
`

export const Logo = styled(Flex)``