import React, { useContext } from 'react'
import { withTheme } from 'styled-components'
import { FaucentContext } from '../../utils/context'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { Typography } from '../Typography'
import CreateForm from './CreateForm'
import { CreateWalletWrapper } from './styled'

const FaucentCreateWallet = ({theme}) => {
    return (
        <CreateWalletWrapper>
            <Container>
                <Flex $direction="column">
                    <Typography
                        variant="span"
                        $fontWeight="700"
                        $size={theme.fontSizes.xLarge}
                        $color={theme.colors.lightPink}
                    >
                        Create IDEP Wallet
                    </Typography>
                    <Typography
                        variant="p"
                        $fontWeight="500"
                        $size={theme.fontSizes.large}
                        $margin="1em 0"
                        $color={theme.colors.lightPink}
                    >
                        To create new wallet please enter a username.
                    </Typography>
                    <Typography
                        variant="p"
                        $fontWeight="400"
                        $margin="0 1em"
                        $color={theme.colors.error}
                    >
                        * Please store your mnemonic somewhere safe!
                    </Typography>
                </Flex>
                <Flex $height="100%">
                    <CreateForm/>
                </Flex>
            </Container>
        </CreateWalletWrapper>
    )
}

export default withTheme(FaucentCreateWallet)
