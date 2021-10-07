import React from 'react'
import { HeaderWrapper, Logo } from './styled'
import LogoImage from '../../assets/logo_mark.png'
import { Image } from '../Image'
import { Typography } from '../Typography'
import { Flex } from '../Flex'
import { withTheme } from 'styled-components'
import { Container } from '../Container'

const Header = ({theme}) => {

    return (
        <HeaderWrapper>
            <Container>
                <Logo
                    $alignItems="center"
                    $width="auto"
                >
                    <Image 
                        src={LogoImage}
                        $height="40%" 
                    />
                </Logo>
                <Flex 
                    $alignItems="center"
                    $margin="0 1.5rem"
                >
                    <Typography 
                        variant="span"
                        $size={theme.fontSizes.large}
                    >
                        Faucet
                    </Typography>
                </Flex>
            </Container>
        </HeaderWrapper>
    )
}

export default withTheme(Header)
