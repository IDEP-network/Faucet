import styled from "styled-components";
import { Flex } from "../Flex";

export const TokensWrapper = styled(Flex)`
    flex-direction: column;
    background-color: ${props => props.theme.colors.lightBlue};
    padding: 3em 0;
    min-height: 30vh;
    height: 30vh;
`