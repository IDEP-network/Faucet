import React from 'react'
import { Button } from '../../Button'
import { Form } from '../../Form'
import { Input } from '../../Input'
import { FromLabel } from './styled'
import Recaptcha from 'react-recaptcha'
import { Flex } from '../../Flex'
import { withTheme } from 'styled-components'

const TokenForm = ({theme}) => {
    const recaptchaLoaded = () => {
        console.log('capcha successfully loaded');
    }

    return (
        <Form>
            <Flex $direction="column">
                <FromLabel>Enter wallet address to get juicy juicy IDEP tokens.</FromLabel>
                <Input 
                    $bcg={theme.colors.white} 
                    $color={theme.colors.black} 
                    placeholder="Enter Account Address"
                />
            </Flex>
            <Recaptcha
                elementID="a1"
                sitekey="6LeLa4ocAAAAALHMRehSUtwG9Y1WN9eJaPd9SnpZ"
                render="explicit"
                onloadCallback={() => recaptchaLoaded()}
            />
            <Button
                $bcg={theme.colors.white}
                $width="35%"
                $radius="20px"
                $padding=".25em 0"
                $color={theme.colors.lightBlue}
                $fontWeight={700}
            >
                Send
            </Button>
        </Form>
    )
}

export default withTheme(TokenForm)