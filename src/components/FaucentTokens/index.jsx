import React from 'react'
import { Typography } from '../Typography'
import Steps from './Steps'
import { TokensWrapper } from './styled'
import TokenForm from './TokenForm'
import { Container } from '../Container'
import { withTheme } from 'styled-components'
import { Flex } from '../Flex'

const FaucentTokens = ({theme}) => {
    return (
        <TokensWrapper>
            <Container>
                <Flex $direction="column">
                    <Typography
                        variant="span"
                        $color="#fff"
                        $fontWeight="700"
                        $size={theme.fontSizes.xLarge}
                    >
                        To request tokens using the faucet:
                    </Typography>
                    <Steps/>
                </Flex>
                <Flex $height="100%">
                    <TokenForm/>
                </Flex>
            </Container>
        </TokensWrapper>
    )
}

export default withTheme(FaucentTokens)
