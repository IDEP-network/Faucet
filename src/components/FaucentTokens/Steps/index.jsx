import React from 'react'
import { withTheme } from 'styled-components'
import { Typography } from '../../Typography'
import { StepsContainer } from './styled'

const Steps = ({theme}) => {
    return (
        <StepsContainer>
            <Typography
                variant="p"
                $color={theme.colors.white}
                $size={theme.fontSizes.large}
                
            >
                1) Enter the address of the wallet where you want to top up funds.
            </Typography>
            <Typography
                variant="p"
                $color={theme.colors.white}
                $size={theme.fontSizes.large}
            >
                2) Click SUBMIT.
            </Typography>
            <Typography
                variant="p"
                $color={theme.colors.white}
                $size={theme.fontSizes.large}
            >
                3) Funds will be in the testnet account you specified within a few seconds!
            </Typography>
        </StepsContainer>
    )
}

export default withTheme(Steps)
