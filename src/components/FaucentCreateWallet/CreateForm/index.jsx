import React, { useContext } from 'react'
import { Button } from '../../Button'
import { Form } from '../../Form'
import { Input } from '../../Input'
import { FromLabel } from './styled'
import Recaptcha from 'react-recaptcha'
import { Flex } from '../../Flex'
import { withTheme } from 'styled-components'
import { FaucentContext } from '../../../utils/context'
import { useOnChange } from '../../../hooks/use.on.change'
import { useRequest } from '../../../hooks/use.request'

const CreateForm = ({theme}) => {
    const { state, setState, setModal } = useContext(FaucentContext)
    const { request } = useRequest()
    const { changeHandler } = useOnChange()

    const recaptchaLoaded = () => {
        console.log('captcha');
    }

    const submitHandler = (e) => {
        e.preventDefault()
        request(state.username)
        setModal(true)
    }

    return (
        <Form>
            <Flex $direction="column">
                <FromLabel $color={theme.colors.lightPink} >Enter username to create an IDEP wallet</FromLabel>
                <Input
                    name="username"
                    $bcg={theme.colors.lightPink} 
                    $color={theme.colors.white}
                    placeholder="Enter User Name"
                    onChange={e => changeHandler(e)} 
                />
            </Flex>
            <Recaptcha
                elementID="a2"
                sitekey="6Lfw_Z4cAAAAAN5wzhIaW4hcdxZCLcoR09eAGDxA"
                render="explicit"
                onloadCallback={() => recaptchaLoaded()}
            />
            <Button
                $bcg={theme.colors.lightPink}
                $width="35%"
                $radius="20px"
                $padding=".25em 0"
                $color={theme.colors.white}
                $fontWeight={700}
                onClick={e => submitHandler(e)}
            >
                Send
            </Button>
        </Form>
    )
}

export default withTheme(CreateForm)