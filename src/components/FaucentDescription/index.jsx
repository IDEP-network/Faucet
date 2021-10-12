import React from 'react'
import { Button } from '../Button'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { Image } from '../Image'
import { Typography } from '../Typography'
import { DescriptionWrapper } from './styled'
import BigLogo from '../../assets/black_text.png'
import { withTheme } from 'styled-components'
import { Link } from 'react-scroll'

const FaucentDescription = ({theme}) => {
    return (
        <DescriptionWrapper>
            <Container $alignItems="center">
                <Flex 
                    $direction="column" 
                    $flex="1" 
                    $justify="space-between"
                    $height="50%"
                >
                    <Typography 
                        variant="span"
                        $size={theme.fontSizes.xxLarge}
                    >
                        What is a Faucet?
                    </Typography>
                    <Typography 
                        variant="p" 
                        $width="65%"
                        $size={theme.fontSizes.large}
                        $lineH="35px"
                    >
                        This faucet is a web-based service that provides test IDEP tokens to users of the testnet Denali. While these tokens have no 'real world' value, they enable users to experiment with IDEP Network testnet features!
                    </Typography>
                    <Button
                        $bcg={theme.colors.lightBlue}
                        $height="50px"
                        $width="150px"
                        $radius="50px"
                        $color={theme.colors.white}
                    >
                        <Link to="get-started" duration={500} smooth={true} >
                            Get Started
                        </Link>
                    </Button>
                </Flex>
                <Flex 
                    $flex="1" 
                    $alignItems="center" 
                    $height="auto" 
                    $padding="0 0 10em 0"
                >
                    <Image src={BigLogo} $height="auto" $width="100%" />
                </Flex>
            </Container>
        </DescriptionWrapper>
    )
}

export default withTheme(FaucentDescription)